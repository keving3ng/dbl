from pymongo import MongoClient
from pprint import pprint
from random import randrange, choice, getrandbits
from json import dumps
from argparse import ArgumentParser

client = MongoClient("mongodb://localhost:27017")
db = client.items

DEFAULT_NUM_ITEMS = 12


def pickRandomFromArray(arr):
    return arr[randrange(0, len(arr) - 1, 1)].strip()


def randomlyPickIfUsed():
    return bool(getrandbits(1))


def generateProductList(n):
    productList = []
    names = []
    usedNames = []

    # Getting data from files
    with open('./datasets/products.txt') as file:
        names = file.readlines()

    with open('./datasets/colours.txt') as file:
        colours = file.readlines()

    with open('./datasets/countries.txt') as file:
        countries = file.readlines()

    with open('./datasets/companies.txt') as file:
        companies = file.readlines()

    # Generate the REQUIRED FIELDS
    for i in range(n):
        while True:
            newName = pickRandomFromArray(names)
            if(usedNames.count(newName) == 0):
                usedNames.append(newName)
                break

        newProduct = {'name': newName, 'price': '${0}.{1}'.format(
            randrange(1, 199, 1),
            choice(["99", "97", "69"])),
            'quantity': '{0}'.format(randrange(0, 10000, 1))}

        if(randomlyPickIfUsed()):
            newProduct['rating'] = "{0}.{1}".format(
                randrange(1, 5, 1), randrange(0, 9, 1))

        if(randomlyPickIfUsed()):
            newProduct['popularity'] = "{0} orders per {1}".format(
                randrange(0, 1000), choice(["hour", "day", "month"]))

        if(randomlyPickIfUsed()):
            newProduct['colour'] = pickRandomFromArray(colours)

        if(randomlyPickIfUsed()):
            newProduct['origin'] = pickRandomFromArray(countries)

        if(randomlyPickIfUsed()):
            newProduct['manufacturer'] = pickRandomFromArray(companies)

        if(randomlyPickIfUsed()):
            newProduct['weight'] = "{0}.{1} kg".format(
                randrange(0, 100, 1), randrange(0, 10, 1))

        productList.append(newProduct)

    return productList


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("-n", "-num", type=int,
                        help="Number of products to generate and insert into database. Default is {0}.".format(DEFAULT_NUM_ITEMS), default=DEFAULT_NUM_ITEMS)

    n = parser.parse_args().n
    data = generateProductList(parser.parse_args().n)

    for item in data:
        result = db.inventory.insert_one(item)
        print('Added item {0} as {1}'.format(item, result.inserted_id))

    print('Added {0} item(s) to the database.'.format(n))
