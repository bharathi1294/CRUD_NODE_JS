# CRUD-operation-using-mongo-node
This is a simple server application using node.js. I have used Mongodb as database and ejs as frontend.

## Pre-requisites
Node and Mongodb should be installed.

## Getting Started
### Installing packages
Clone repository and run following command in command prompt/terminal.
```
npm install
```
This will install dependencies in your local environment.


### Start mongo server
First of all, open mongodb/mongo.conf and set you local IP address against which you your mongo database server will be running.
For more on mongo configuration option, visit [Mongodb docs](https://docs.mongodb.com/manual/reference/configuration-options/#configuration-file)
Now run following command in command prompt/terminal(in root folder)
```
mongod --config=mongodb/mongo.conf
```
This will start mongo database server and it keeps running until you manually stops it. 


### Start web server
Now open another command prompt/terminal(in root folder) and run following command -
```
npm start
```
This will start node server running on port 3000.
