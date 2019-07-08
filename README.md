## Overview
DBL is a learning project where I plan to explore and implement variety of popular software tools and frameworks. 

![Image of DBL Conceptual Architecture](https://i.ibb.co/DQyv4pq/dbl-Conceptual-Architecture-June-2019.png)

## Getting Started

After cloning the repository, navigate into the root folder and use [docker-compose](https://docs.docker.com/compose/):

`$ docker-compose build`

`$ docker-compose up`

Afterwards, you will need to generate data to use and insert it into the database. Please see the following section for how to do this. 

Navigate to `localhost:3000` or `http://172.20.0.4:3000/` to view the web app. 

## Generating Test Data

Navigate from the root folder:

`$ cd tools/mongo`

`$ python mongo_init.py [-n <int>]`

`-n <int>` allows you to set a custom number of generated products. The default value is 12.

## Running Tests

### Initial Setup

`$ cd tests/`

`$ sudo chmod +x ./setup.sh`

`$ ./setup.sh`

This shell script will install the dependencies and frameworks required to use all tests.

#### Web UI

`$ cd tests/ui/web`

`$ robot -d results/ SPA.robot`

## Developer Setup Scripts

If you would like to set up the project in developer mode, you will need two terminal windows to run the two scripts:

`$ cd tools/dev`

`$ sudo chmod +x ./start_db_api.sh ./start_web.sh`

##### Terminal Window 1:

`$ ./start_db_api.sh`

##### Terminal Window 2:

`$./start_web.sh`
