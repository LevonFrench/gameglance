import subprocess
import datetime
import json
import os
import re
from collections import defaultdict

window = "7 days ago"
branch = "origin/main"
user_name = "LevonFrench"

def run_git(args):
    try:
        return subprocess.check_output(["git"] + args, text=True, encoding="utf-8", errors="replace").strip()
    except Exception as e:
        print("Git error:", args, e)
        return ""

# 1. Commits shortstat
shortstat_raw = run_git(["log", branch, f"--since={window}", "--format=%H|%aN|%ae|%ai|%s", "--shortstat"])
# 2. Numstat
numstat_raw = run_git(["log", branch, f"--since={window}", "--format=COMMIT:%H|%aN", "--numstat"])
# 3. Timestamps
timestamps_raw = run_git(["log", branch, f"--since={window}", "--format=%at|%aN|%ai|%s"])
# 4. Shortlog
shortlog_raw = run_git(["shortlog", branch, f"--since={window}", "-sn", "--no-merges"])

commits_list = [line for line in timestamps_raw.split('\n') if line.strip()]
total_commits = len(commits_list)

insertions = 0
deletions = 0
for line in shortstat_raw.split('\n'):
    if ' changed,' in line:
        ins = re.search(r'(\d+) insertion', line)
        dels = re.search(r'(\d+) deletion', line)
        if ins: insertions += int(ins.group(1))
        if dels: deletions += int(dels.group(1))

net_loc = insertions - deletions

# Authors
authors = {}
for line in shortlog_raw.split('\n'):
    if line.strip():
        parts = line.strip().split('\t')
        if len(parts) == 2:
            authors[parts[1]] = {"commits": int(parts[0]), "insertions": 0, "deletions": 0, "test_ratio": 0, "top_area": ""}

# Numstat parse
test_insertions = 0
current_author = None
for line in numstat_raw.split('\n'):
    if line.startswith('COMMIT:'):
        current_author = line.split('|')[1]
    elif line.strip() and not line.startswith('-'):
        parts = line.split('\t')
        if len(parts) >= 3:
            ins = int(parts[0])
            dels = int(parts[1])
            file = parts[2]
            if current_author in authors:
                authors[current_author]['insertions'] += ins
                authors[current_author]['deletions'] += dels
            if 'test' in file.lower() or 'spec' in file.lower():
                test_insertions += ins

test_ratio = test_insertions / max(insertions, 1)

# Sessions
sessions = 0
deep_sessions = 0
total_session_minutes = 0
if commits_list:
    times = []
    for c in commits_list:
        parts = c.split('|')
        if len(parts) >= 1:
            times.append(int(parts[0]))
    times.sort()
    
    current_session_start = times[0]
    last_time = times[0]
    for t in times[1:]:
        if t - last_time > 45 * 60:
            # new session
            dur = (last_time - current_session_start) / 60
            if dur == 0: dur = 10 # 10 min for single commit
            total_session_minutes += dur
            sessions += 1
            if dur >= 50: deep_sessions += 1
            current_session_start = t
        last_time = t
    dur = (last_time - current_session_start) / 60
    if dur == 0: dur = 10
    total_session_minutes += dur
    sessions += 1
    if dur >= 50: deep_sessions += 1

loc_per_hour = 0
if total_session_minutes > 0:
    loc_per_hour = int(insertions / (total_session_minutes / 60))

# Prefix types
feat_c = 0
fix_c = 0
for c in commits_list:
    subj = c.split('|')[-1].lower()
    if subj.startswith('feat'): feat_c += 1
    if subj.startswith('fix'): fix_c += 1

feat_pct = feat_c / max(total_commits, 1)
fix_pct = fix_c / max(total_commits, 1)

# Dates
dates = set()
for c in commits_list:
    parts = c.split('|')
    if len(parts) >= 3:
        dates.add(parts[2].split(' ')[0])

# Streak
streak_raw = run_git(["log", branch, "--format=%ad", "--date=format:%Y-%m-%d"])
streak_days = 0
if streak_raw:
    all_dates = sorted(list(set(streak_raw.split('\n'))), reverse=True)
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    current = datetime.datetime.now()
    idx = 0
    while idx < len(all_dates):
        if all_dates[idx] == current.strftime("%Y-%m-%d"):
            streak_days += 1
            current -= datetime.timedelta(days=1)
        elif all_dates[idx] > current.strftime("%Y-%m-%d"):
            pass
        else:
            break
        idx += 1

metrics = {
    "commits": total_commits,
    "contributors": len(authors),
    "prs_merged": 0,
    "insertions": insertions,
    "deletions": deletions,
    "net_loc": net_loc,
    "test_loc": test_insertions,
    "test_ratio": round(test_ratio, 2),
    "active_days": len(dates),
    "sessions": sessions,
    "deep_sessions": deep_sessions,
    "avg_session_minutes": int(total_session_minutes / max(sessions, 1)),
    "loc_per_session_hour": loc_per_hour,
    "feat_pct": round(feat_pct, 2),
    "fix_pct": round(fix_pct, 2),
    "peak_hour": 0,
    "ai_assisted_commits": 0
}

data = {
    "date": datetime.datetime.now().strftime("%Y-%m-%d"),
    "window": window,
    "metrics": metrics,
    "authors": authors,
    "version_range": [],
    "streak_days": streak_days,
    "tweetable": f"Past 7d: {total_commits} commits ({len(authors)} contributors), {insertions/1000:.1f}k LOC, {test_ratio*100:.0f}% tests."
}

os.makedirs(".context/retros", exist_ok=True)
existing = [f for f in os.listdir(".context/retros") if f.startswith(data["date"])]
next_id = len(existing) + 1
out_file = f".context/retros/{data['date']}-{next_id}.json"
with open(out_file, "w") as f:
    json.dump(data, f, indent=2)

print(f"Retro saved to {out_file}")
print(json.dumps(data, indent=2))
