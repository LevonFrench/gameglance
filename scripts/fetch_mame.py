import requests
import re
import os
import zipfile

def fetch_command_dat():
    url = "https://www.progettosnaps.net/command/"
    print(f"Fetching {url}")
    html = requests.get(url, verify=False).text
    
    # Looking for the zip link: usually href="command.zip" or href="download/command.zip"
    links = re.findall(r'href=[\'"]([^\'"]*command.*?\.zip)[\'"]', html, re.IGNORECASE)
    
    if not links:
        print("Couldn't find command dat zip link!")
        print("All zip links:", set(re.findall(r'href=[\'"]([^\'"]*\.zip)[\'"]', html, re.IGNORECASE)))
        return
        
    download_link = links[0]
    if not download_link.startswith('http'):
        if download_link.startswith('/'):
            download_link = "https://www.progettosnaps.net" + download_link
        else:
            download_link = url + download_link
            
    print(f"Downloading {download_link}...")
    r = requests.get(download_link, verify=False)
    
    os.makedirs('scratch/mame', exist_ok=True)
    zip_path = 'scratch/mame/command.zip'
    with open(zip_path, 'wb') as f:
        f.write(r.content)
        
    print("Extracting...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall('scratch/mame/')
        
    print("Done extracting. Files:")
    print(os.listdir('scratch/mame/'))

if __name__ == "__main__":
    fetch_command_dat()
