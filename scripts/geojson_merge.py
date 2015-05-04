import json
import os
import requests

path = "/home/jenna/Documents/twfy/data/constits/individual/"
filenames = os.listdir(path)

with open('/home/jenna/Documents/twfy/data/WMC.json') as f:
    raw_constits = json.load(f)

    constits = {}
    for code in raw_constits:
        constit_data = raw_constits[code]
        constits[code] = constit_data

def fix_format(data, id_, name):
    """Add id and name to geojson for each constit."""
    dict_ = {"type": "Feature",
             "properties": {"id": id_, "name": name}, 
             "geometry": data,
            }
    return dict_

data = {}
for filename in filenames:
    with open (path + filename, "r") as f: 
        code = filename[:-8]
        name = constits[code]["name"]
        print name
        print "reading: " + filename + " (" + name + ")"
        file_ = f.read()
        file_ = json.loads(file_)
    file_ = fix_format(file_, filename[:-8], name)
    data[filename[:-8]] = file_

i = 0
constits_geo = ""
for constit in data:
    geo = json.dumps(data[constit])
    constits_geo += geo

    print constit
    if i < len(filenames) - 1:
        constits_geo += ", "
    i += 1

all_geo = '{"type":"FeatureCollection","features":['
all_geo += constits_geo + ']}'
#all_geo = json.loads(all_geo.replace(' ', ''))
all_geo = json.loads(all_geo)

with open(path + "combined.geojson", "a") as f:
    json.dump(all_geo, f)

