This project was bootstrapped with [Create React App](https://github.com/faceibook/create-react-app).

## Starting the React Web App

In the project directory:

### `$cd ui/web`
### `$ npm install`
### `$ npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Starting the Inventory API

### `$cd api/inventory`
### `$ pip install virtualenv`
### `$ virtualenv .`
### `$ source ./bin/activate`
### `$ pip install flask-restful`
### `$ python ./api.py`

## Starting the MongoDB Image

### `$ sudo docker pull mongo`
### `$ sudo docker run -d -p 27017-27019:27017-27019 --name mongodb mongo`
### `$ sudo docker exec -it mongodb bash`

## Known Issues
### CORS
The web app may have issues accessing data from the API due to CORS. You may need to download a browser extension that allows you ignore these rules temporarily. 
