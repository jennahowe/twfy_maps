import json
import os
import requests

path = "/home/jenna/Documents/twfy/data/constits/"
filenames = os.listdir(path)

def fix_format(data, constit):
    dict_ = {"type":"Feature",
             "properties":{"name":constit}, 
             "geometry":data,
            }
    return dict_

data = {}
for filename in filenames:
    with open (path + filename, "r") as f: 
        print "reading: " + filename
        file_ = f.read()
        file_ = json.loads(file_)
    file_ = fix_format(file_, filename[:-8])
    data[filename[:-8]] = file_

i = 0
constits_geo = ""
for constit in data:
    geo = json.dumps(data[constit])
    constits_geo += geo

    if i < len(filenames) - 1:
        constits_geo += ", "
    i += 1

all_geo = '{"type":"FeatureCollection","features":['
all_geo += constits_geo + ']}'
#all_geo = json.loads(all_geo.replace(' ', ''))
all_geo = json.loads(all_geo)

with open (path + "combined2.geojson", "a") as f:
    json.dump(all_geo, f)

