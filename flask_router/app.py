from flask import Flask
import requests
import urllib
app = Flask(__name__)

@app.route('/<string:id>/<string:body>')
def hello_world(id, body):
    f = {'id':id, 'content':body}
    encoded = urllib.parse.urlencode(f)
    headers= {
                'Authorization': 'Bearer oauth2:ad1da66c9d899931ee8f90e437ad11e1326d59c6',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
    r = requests.post('https://api.twist.com/api/v3/threads/update?' + encoded, headers=headers)
    return 'Hello, World!'