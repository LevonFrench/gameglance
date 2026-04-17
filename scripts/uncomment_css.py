import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace block comments that wrap [data-card-theme="..."]
# Some are multiline comments: /* [data-card-theme="snes"] ... } */
# Let's just remove /* and */ that appear at the start and end of blocks.
def uncommenter(match):
    # inner content of the comment
    inner = match.group(1)
    if '[data-card-theme=' in inner:
        return inner
    return match.group(0)

# We use re.sub to find all /* ... */
css = re.sub(r'/\*\s*(\[data-card-theme=[^/]+?)\*/', uncommenter, css, flags=re.DOTALL)

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Uncommented themes!")
