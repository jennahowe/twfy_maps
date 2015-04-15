import json
from urllib import urlretrieve

with open('/home/jenna/Documents/twfy/data/WMC.json') as f:
    raw_constits = json.load(f)
    
    constits = {}
    for code in raw_constits:
        name = raw_constits[code]['name']
        constits[name] = code

base_url = 'http://mapit.mysociety.org/area/'

def prettify(name):
    return name.lower().replace(' ', '_').replace(',', '')

for name in constits:
    code = constits[name]
    name = prettify(name)

    url = base_url + code + '.geojson'
    dest = '/home/jenna/Documents/twfy/data/' + name + '.geojson'
    print "downloading geometry for: " + name
    urlretrieve(url, dest)





