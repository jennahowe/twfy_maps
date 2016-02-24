from flask import Flask
from flask import render_template
from twfy import TWFY
import json

app = Flask(__name__)


@app.route('/')
def index():
    twfy = TWFY('DDuejwBGcGSrDBEfmVGZo9Yz')
    mp_list = json.loads(twfy.api.getMPs(output='js'), 'iso-8859-1')
    constit_data = {}

    for mp in mp_list:
        constit_data[mp["constituency"]] = {'mp_name': mp["name"],
                                       'party': mp["party"], 
                                       'member_id': mp["member_id"],
                                       }
    return render_template('index.html', constit_data=constit_data)

if __name__ == '__main__':
    app.run(debug=True)