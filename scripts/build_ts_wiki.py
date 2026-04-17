import os
import re
import json
import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md

INDEX_URL = "https://devdocs.io/docs/typescript/index.json"
DB_URL = "https://documents.devdocs.io/typescript/db.json"
OUT_DIR = "wiki/concepts/typescript"

def sanitize_filename(name):
    return re.sub(r'[\\/*?:"<>|]', "", name).strip()

def build_wiki():
    print("Fetching index.json...")
    index_res = requests.get(INDEX_URL)
    index_res.raise_for_status()
    index_data = index_res.json()
    
    print("Fetching db.json...")
    db_res = requests.get(DB_URL)
    db_res.raise_for_status()
    db_data = db_res.json()
    
    # Map base paths to their primary metadata (name, type)
    pages = {}
    for entry in index_data.get('entries', []):
        path = entry['path']
        base_path = path.split('#')[0]
        
        # If it's a direct page link (no hash) or we haven't seen this base_path yet
        if '#' not in path or base_path not in pages:
            # We prefer entries without hash for the page title.
            # If we already have an entry without hash, we don't overwrite it.
            if base_path in pages and '#' in path:
                continue
            pages[base_path] = entry
            
    print(f"Found {len(pages)} unique pages to process.")
    
    if not os.path.exists(OUT_DIR):
        os.makedirs(OUT_DIR)
        
    count = 0
    for base_path, entry in pages.items():
        if base_path not in db_data:
            print(f"Warning: {base_path} not found in db.json")
            continue
            
        html_content = db_data[base_path]
        
        # Parse HTML with BeautifulSoup to remove unwanted tags
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Remove script and style tags
        for tag in soup(['script', 'style', 'nav', 'header', 'footer']):
            tag.decompose()
            
        # Optional: DevDocs sometimes has an _app div or similar, but the db.json is usually just the article inner HTML.
        clean_html = str(soup)
        
        # Convert to Markdown
        markdown_text = md(clean_html, heading_style="ATX", default_title=True)
        
        # Add a title header
        title = entry.get('name', 'Untitled')
        category = entry.get('type', 'Uncategorized')
        
        final_md = f"# {title}\n\n*Category: {category}*\n\n{markdown_text}"
        
        # Determine output path
        cat_dir = os.path.join(OUT_DIR, sanitize_filename(category))
        os.makedirs(cat_dir, exist_ok=True)
        
        filename = sanitize_filename(title) + ".md"
        filepath = os.path.join(cat_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(final_md)
            
        count += 1
        
    print(f"Successfully generated {count} markdown files in {OUT_DIR}.")

if __name__ == '__main__':
    build_wiki()
