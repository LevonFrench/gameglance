import json, os, re

# Load games.ts to get the list of games and characters
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Extract games list using a dirty regex (works because the file is structured)
# Or better, let's write a simple node script to import it and log the result to a json file
node_script = """
import { SUPPORTED_GAMES } from './src/games.ts';
import fs from 'fs';
fs.writeFileSync('games_dump.json', JSON.stringify(SUPPORTED_GAMES, null, 2));
"""
with open('dump.mjs', 'w', encoding='utf-8') as f:
    f.write(node_script)
