import os

def main():
    agent_dir = '.agents/workflows'
    if not os.path.exists(agent_dir):
        print(f"Directory {agent_dir} does not exist.")
        return

    count = 0
    for f in os.scandir(agent_dir):
        if f.is_file() and f.name.endswith('.md') and f.stat().st_size == 0:
            name_str = f.name[:-3].replace('-', ' ').title()
            content = f"""---
name: {name_str}
description: Antigravity workflow for {name_str}
---

# {name_str}

This is a generated placeholder for the custom {name_str} workflow.
"""
            with open(f.path, 'w', encoding='utf-8') as out:
                out.write(content)
            count += 1
            
    print(f"Restored frontmatter for {count} zero-byte agent workflow files.")

if __name__ == "__main__":
    main()
