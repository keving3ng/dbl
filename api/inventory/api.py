from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
from bson.json_util import dumps
from pymongo import MongoClient
import json
import ast

client = MongoClient("mongodb://mongo:27017")

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

    def put(self, name):
        data_dict = ast.literal_eval(request.get_data())
        response = inv.update_one(
            {'name': name}, {'$set': data_dict}, upsert=True)

        if (response.acknowledged):
            return 200
        return 500

    def delete(self, name):
        response = inv.delete_one({'name': name})

        if (response.deleted_count == 1):
            return 200
        else:
            return 500


api.add_resource(Inventory, "/items/<string:name>")

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
