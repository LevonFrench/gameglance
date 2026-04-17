import os, time
for f in os.listdir('faqs/old'):
    if f.endswith('.json'):
        print(f"{f}: {time.ctime(os.path.getmtime(os.path.join('faqs/old', f)))}")
