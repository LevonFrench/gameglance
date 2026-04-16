import socket
import sys
import os
import argparse

HOST = 'gopher.endangeredsoft.org'
PORT = 70

def fetch_gopher(selector=''): 
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(15)
        s.connect((HOST, PORT))
        # Gopher protocol: send selector + CRLF
        s.sendall((selector + '\r\n').encode('utf-8'))
        response = b''
        while True:
            try:
                data = s.recv(4096)
                if not data:
                    break
                response += data
            except socket.timeout:
                break
        return response.decode('utf-8', errors='replace')

def search(query):
    print(f"Searching EndangeredSoft GameFAQs Archive for: '{query}'...")
    # The search syntax for the archive is SEARCH:GFA + tab + query
    res = fetch_gopher('SEARCH:GFA\t' + query)
    lines = res.splitlines()
    results = []
    
    for line in lines:
        if not line or line.startswith('i') or line == '.': 
            continue
        parts = line.split('\t')
        
        # '0' at the start of a Gopher line designates a text file
        if len(parts) >= 4 and line.startswith('0'):
            # Strip the '0' indicator from the display title
            title = parts[0][1:]
            selector = parts[1]
            results.append((title, selector))
            
    return results

def download(selector, out_dir):
    # Extract filename from selector
    filename = selector.split('/')[-1]
    if not filename.endswith('.txt'):
        filename += '.txt'
        
    out_path = os.path.join(out_dir, filename)
    print(f"  -> Downloading: {filename}")
    
    # Text files are downloaded by simply fetching their selector
    text = fetch_gopher(selector)
    
    # Remove standard Gopher EOF marker if present
    if text.endswith('.\r\n'):
        text = text[:-3]
        
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(text)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Gopher GameFAQs Pull System")
    parser.add_argument('query', type=str, help='Search query (e.g., "Street Fighter")')
    parser.add_argument('--download', action='store_true', help='Download all matching results')
    parser.add_argument('--limit', type=int, default=5, help='Limit number of downloads per query (default: 5)')
    parser.add_argument('--out', type=str, default='wiki/raw/guides', help='Output directory (default: wiki/raw/guides)')
    args = parser.parse_args()

    results = search(args.query)
    print(f"\nFound {len(results)} matching text files.")
    
    if not os.path.exists(args.out):
        os.makedirs(args.out)
        
    for i, (title, selector) in enumerate(results):
        print(f"[{i+1}/{len(results)}] {title.replace('gamefaqs-archive/', '')}")
        if args.download and i < args.limit:
            download(selector, args.out)
            
    if not args.download and len(results) > 0:
        print("\nTip: Run again with --download to actually pull these files.")
