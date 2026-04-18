import urllib.request
try:
    url = "https://wiki.supercombo.gg/w/Capcom_vs._SNK_2/Ryu"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("Found Supercombo URL length:", len(html))
    if "Hadouken" in html:
        print("Contains Hadouken")
except Exception as e:
    print("Error:", e)
