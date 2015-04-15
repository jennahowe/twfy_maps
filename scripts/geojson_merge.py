import json
import os

path = '/home/jenna/Documents/twfy/data/constits/'
filenames = os.listdir(path)

def fix_format(data, constit):
    return "{type: Feature, properties: {name: %s}, geometry: %s}" % (constit, data)

data = {}
for filename in filenames:
    with open (path + filename, 'r') as f:
        print "reading: " + filename
        file_ = f.read()
    file_ = fix_format(file_, filename[:-8])
    data[filename[:-8]] = file_

constits_geo = ''
for constit in data:
    geo = data[constit]
    constits_geo += geo

all_geo = '{type: FeatureCollection, features: [%s]}' % constits_geo

with open (path + 'combined.geojson', 'a') as f:
    json.dump(all_geo, f)
    


