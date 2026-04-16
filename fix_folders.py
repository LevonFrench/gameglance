import os
import shutil

os.chdir('public/data')
folders = ['asuka-120%-burning-fest-limited', 'killer-instinct-(1994)', 'killer-instinct-(2013)', 'mortal-kombat-(2011)', 'samurai-shodown-(2019)', 'under-night-in-birth-ii-[sysceles]']

for f in folders:
    if os.path.exists(f):
        new_name = f.replace('%', '').replace('(', '').replace(')', '').replace('[', '').replace(']', '')
        os.rename(f, new_name)
        print(f"Renamed {f} to {new_name}")
        
if os.path.exists('tao-feng-fist-of-the-lotus/black-mantis'):
    try:
        os.remove('tao-feng-fist-of-the-lotus/black-mantis')
    except:
        shutil.rmtree('tao-feng-fist-of-the-lotus/black-mantis', ignore_errors=True)
if os.path.exists('tao-feng-fist-of-the-lotus/pale-lotus'):
    try:
        os.remove('tao-feng-fist-of-the-lotus/pale-lotus')
    except:
        shutil.rmtree('tao-feng-fist-of-the-lotus/pale-lotus', ignore_errors=True)
