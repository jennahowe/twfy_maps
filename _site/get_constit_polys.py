import json

with open('/home/jenna/Documents/twfy/data/WMC.json') as f:
    raw_constits = json.load(f)
    
    constits = {}
    for code in raw_constits:
        name = raw_constits[constit]['name']
        constits[name] = code
                
print constits







