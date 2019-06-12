from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from bson.json_util import dumps
from pymongo import MongoClient
import json

client = MongoClient('mongodb://localhost:27017')

db = client.items
inv = db.inventory

app = Flask(__name__)
api = Api(app)


class Inventory(Resource):
    def get(self, name):
        if (name == 'all'):
            return json.loads(dumps(inv.find({}, {'_id': 0}))), 200
        elif (inv.find_one({'name': name})):
            return json.loads(dumps(inv.find_one({'name': name}, {'_id': 0}))), 200
        else:
            return "Item not found", 400

    def put(self):
        return "Not yet implemented", 500

    def delete(self, name):
        
        response = inv.delete_one({'name': name})

        if (response['deletedCount'] == 1):  # This will verify properly later on
            return 500
        return 200


api.add_resource(Inventory, "/items/<string:name>")

if __name__ == "__main__":
    app.run(debug=True)
