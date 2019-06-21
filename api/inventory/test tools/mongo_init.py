from pymongo import MongoClient
from pprint import pprint
from random import randrange, choice
from json import dumps
from argparse import ArgumentParser

client = MongoClient("mongodb://localhost:27017")
db = client.items

DEFAULT_NUM_ITEMS = 12


def generateProductList(n):
    productList = []
    names = []
    usedNames = []
    with open('./data/products.txt') as file:
        names = file.readlines()

    for i in range(n):
        while True:
            newName = names[randrange(0, len(names) - 1, 1)].strip()
            if(usedNames.count(newName) == 0):
                usedNames.append(newName)
                break

        newProduct = {'name': newName, 'price': '${0}.{1}'.format(
            randrange(1, 199, 1),
            choice(["99", "97", "69"])),
            'quantity': '{0}'.format(randrange(0, 10000, 1))}

        productList.append(newProduct)

    data = open("./data/productlist.json", "w")
    jsonData = dumps(productList)
    data.write(jsonData)
    return productList


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("-n", "-num", type=int,
                        help="Number of products to generate and insert into database. Default is {0}.".format(DEFAULT_NUM_ITEMS), default=DEFAULT_NUM_ITEMS)

    data = generateProductList(parser.parse_args().n)

    for item in data:
        result = db.inventory.insert_one(item)
        print('Added item {0} as {1}'.format(item, result.inserted_id))

    print('Added {0} item(s) to the database.'.format(n))
