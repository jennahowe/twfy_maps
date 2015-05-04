import json
from urllib import urlretrieve

with open('/home/jenna/Documents/twfy/data/WMC.json') as f:
    raw_constits = json.load(f)
    
    constits = {}
    for code in raw_constits:
        name = raw_constits[code]['name']
        constits[name] = code

base_url = 'http://mapit.mysociety.org/area/'

for name in constits:
    code = constits[name]

    url = base_url + code + '.geojson'
    dest = '/home/jenna/Documents/twfy/data/constits/individual/' + code + '.geojson'
    print "downloading geometry for: " + name
    urlretrieve(url, dest)





