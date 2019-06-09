from pymongo import MongoClient
from pprint import pprint
import json
client = MongoClient("mongodb://localhost:27017")
db = client.items

data = [{
    "name": "orange",
    "quantity": 203,
    "price": "$1.99"
}, {
    "name": "apple",
    "quantity": 102,
    "price": "$1.69"
}, {
    "name": "pear",
    "quantity": 84,
    "price": "$2.69"
}]

for item in data:
    result = db.inventory.insert_one(item)
    print('Added item {0} as {1}'.format(item, result.inserted_id))

print('finished adding items')
