from pymongo import MongoClient
from pprint import pprint
<<<<<<< HEAD:api/inventory/mongo_init.py
import json
=======
>>>>>>> c0920e552ddb65626a39c65d6c205811c56bd5de:api/mongo_init.py
from generateProductList import generateProductList

client = MongoClient("mongodb://localhost:27017")
db = client.items

<<<<<<< HEAD:api/inventory/mongo_init.py
data = generateProductList(200)
=======
data = generateProductList(50)
>>>>>>> c0920e552ddb65626a39c65d6c205811c56bd5de:api/mongo_init.py

for item in data:
    result = db.inventory.insert_one(item)
    print('Added item {0} as {1}'.format(item, result.inserted_id))

print('finished adding items')
