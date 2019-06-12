from pymongo import MongoClient
from pprint import pprint
import json
from generateProductList import generateProductList

client = MongoClient("mongodb://localhost:27017")
db = client.items

data = generateProductList(200)

for item in data:
    result = db.inventory.insert_one(item)
    print('Added item {0} as {1}'.format(item, result.inserted_id))

print('finished adding items')
