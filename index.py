from flask import Flask
from flask import render_template
from twfy import TWFY
import json

app = Flask(__name__)


@app.route('/')
def index():
    twfy = TWFY('DDuejwBGcGSrDBEfmVGZo9Yz')
    mp_list = json.loads(twfy.api.getMPs(output='js'), 'iso-8859-1')
    constituency_data = {}

    for mp in mp_list:
        constituency_data[mp["constituency"]] = {'name': mp["name"],
                                              'party': mp["party"], 
                                              'member_id': mp["member_id"],
                                              }
    return render_template('index.html', constituency_data=constituency_data)

if __name__ == '__main__':
    app.run(debug=True)