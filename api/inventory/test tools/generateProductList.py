from random import randrange, choice
from json import dumps


def generateProductList(n):
    productList = []
    names = []
    usedNames = []
    with open('./data/products.txt') as file:
        names = file.readlines()

    for i in range(n):
        while True:
            newName = names[randrange(0, len(names) - 1, 1)]
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
    generateProductList(randrange(20, 100, 1))
