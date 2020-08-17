# Node.js Rest API Assessment

The problem is to create basic API using Node.js. I used express, mongodb as database and postman for testing API calls.I also Created a cluster on mongodb atlas for validating API's.

## Usage

### Installation

npm install

It will install all dependencies for the project like express, jsonwebtoken, mocha, chai, mongoose etc.

### Execute

npm run start

It will run the nodemon server.

## Design Structure

### server.js

It is the main file of the project. It holds database connection, registering the models and routes and running the server on certain port. It also manages headers and cookies.

### .env

This file is environment variable for the project. It holds secret tokens, PORT, connection String, Token Expiry Time etc.

### routes

This directory holds the route of every model like user get, post, put etc.

1. userRoutes - manage user routes
2. topicRoutes - manages topics routes
3. articleRoutes - manages articles routes

### models

This directory holds the properties of each object like email of user. It automatically migrated to database.

1. userModel - holds user properties
2. topicModel - holds topic properties
3. articleModel - holds article properties

### controllers

This directory holds the business logic of the application. It call different service to perform operation

### services

This holds the logic for particular module like authenticateAdmin etc.

1. authenticateAdmin - authenticate that whether the user is valid and it is admin or not
2. fetchArticle - fetch an article by Id as per login status
3. fetchTopicArticles - fetch all articles of a Topic as per login status
4. uploadArticle - create an article for the topic
5. userAuthentication - authenticate user and assign a JWT Token
6. userRegistration - create an user or admin
7. binaryTree - fetch binary tree representation of articles by number of articles count (in-order, pre-order, post-order)

### utils

This directory holds the utilities for thw services like generate token etc.

1. authenticateToken - validate whether token is valid or invalid
2. jwtToken - generate a Bearer JWT Token
3. loginStatus - check whether user is logged in or not
4. validateTopic - check whether topic is valid or not

### topicUploads

It holds the uploaded images of articles and topics in encrypted form.


## Note 

For more api details look my "API doc.md" ...:)