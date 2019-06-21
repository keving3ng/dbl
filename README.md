## Overview
DBL is a learning project where I plan to explore and implement variety of popular tools and frameworks. 

![Image of DBL Conceptual Architecture](https://i.ibb.co/FXnQXdD/dbl-Conceptual-Architecture-June-2019.png)

## Getting Started

After cloning the repository, navigate into the root folder and type the following command:

`$ docker-compose build`

`$ docker-compose up`

Afterwards, you will need to generate data to use and insert it into the database. Please see the following section for how to do this. 

Navigate to `localhost:3000` or `http://172.20.0.4:3000/` to view the web app. 

## Generating Test Data

Navigate from the root folder:

`$ cd tools/`

`$ python mongo_init.py`
