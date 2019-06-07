from flask import Flask, request
from flask_restful import reqparse, Resource, Api
import json

app = Flask(__name__)
api = Api(app)

with open('data.json') as json_file:
    items = json.load(json_file)


class Item(Resource):

    def get(self, name):
        if (name == "all"):
            return items
        else:
            for item in items:
                if (name == item["name"]):
                    return item, 200
            return "Item not found", 404

    def post(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("quantity")
        parser.add_argument("price")
        args = parser.parse_args()

        for i in items:
            if(name == i["name"]):
                return "Item with name {} already exists".format(name), 400

        item = {
            "name": name,
            "quantity": args["quantity"],
            "price": args["price"]
        }
        items.append(item)
        return item, 201

    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("quantity")
        parser.add_argument("price")
        args = parser.parse_args()

        for i in items:
            if(name == i["name"]):
                i["quantity"] = args["quantity"]
                i["price"] = args["price"]
                return i, 200

        item = {
            "name": name,
            "quantity": args["quantity"],
            "price": args["price"]
        }
        items.append(item)
        return item, 201

    def delete(self, name):
        global items
        items = [item for item in items if item["name"] != name]
        return "{} has been deleted.".format(name), 200


api.add_resource(Item, "/items/<string:name>")

if __name__ == '__main__':
    app.run(debug=True)
