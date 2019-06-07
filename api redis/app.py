from flask import Flask, request
from flask_restful import reqparse, Resource, Api
from redis import Redis
import json

app = Flask(__name__)
api = Api(app)
redis = Redis(host='redis', port=6379)


def init():
    with open('data.json') as json_file:
        data = json.load(json_file)

    for item in data:
        redis.execute_command('JSON.SET', 'doc', '.', json.dumps(item))
    reply = json.loads(redis.execute_command('JSON.GET', 'doc'))


class Item(Resource):

    def get(self, name):
        if (name == "all"):
            return data, 200
        else:
            return "Item not found", 404

    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("quantity", required=True,
                            help="You must provide a quantity")
        parser.add_argument("price", required=True,
                            help="You must provide a price")
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
    init()
    app.run(host="0.0.0.0", debug=True)
