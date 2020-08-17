# API end-points

## Createing a user

### POST http://localhost:3000/users

Adding normal user

{
    "name": "Ujjwal",
    "email": "ujjwal@gmail.com",
    "password": "123",
    "role": "normal"
}

Adding Admin

{
    "name": "Ujjwal",
    "email": "ujjwal@gmail.com",
    "password": "123",
    "role": "admin"
}

## Authenticate User

### POST http://localhost:3000/user/authenticate

{
    "email": "ujjwal@gmail.com",
    "password": "123"
}

Response
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVWpqd2FsIiwiaWF0IjoxNTk3NjU1NzQyLCJleHAiOjE1OTc2ODU3NDJ9.rgatp8h_CCi83BPNKqNJe-Mjcb_kvAQmnKfx6Ads5kE"
}

## Creating a Topic

### POST http://localhost:3000/topics

content-type: multipart/form-data
{
  "name": "Animal",
  "userEmail": "ujjwal@gmail.com",
  "image": picture.png
}

Response

{
  "image": [
      {
        "fieldname": "image",
        "originalname": "picture.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "topicUploads/",
        "filename": "dbd0d802a4e97655c995f3e84a4f595e",
        "path": "topicUploads\\dbd0d802a4e97655c995f3e84a4f595e",
        "size": 47135
      }
  ],
  "_id": "5f390b0efb120e6c90af23ac",
  "name": "Animal",
  "userEmail": "ujjwal@gmail.com",
  "__v": 0
}

## Creating an Article

### POST http://localhost:3000/articles

Authroization: accessToken
content-type: multipart/form-data
{
  "title": "Abba",
  "image": happy.png,
  "content": "fasd",
  "isFeatured": true,
  "topicId": 5f390b0efb120e6c90af23ac,
  "userEmail": "ujjwal@gmail.com"
}

Resposne
{
  "image": [
      {
          "fieldname": "image",
          "originalname": "happy.png",
          "encoding": "7bit",
          "mimetype": "image/png",
          "destination": "topicUploads/",
          "filename": "440fa97f3fb3a73a73cd4b8c1de8332c",
          "path": "topicUploads\\440fa97f3fb3a73a73cd4b8c1de8332c",
          "size": 58666
      }
  ],
  "counter": 0,
  "tags": [],
  "_id": "5f39673a4a088d0e68c75b8b",
  "title": "Abba",
  "content": "fasd",
  "isFeatured": true,
  "topicId": "5f390b0efb120e6c90af23ac",
  "__v": 0
}

## Update an Article

### PUT http://localhost:3000/articles/:articleId

Request: http://localhost:3000/articles/5f39673a4a088d0e68c75b8b
{
  "userEmail": "ujjwal@gmail.com",
  "content": "Hello World"
}

Repsonse
{
    "image": [
        {
            "fieldname": "image",
            "originalname": "happy.png",
            "encoding": "7bit",
            "mimetype": "image/png",
            "destination": "topicUploads/",
            "filename": "440fa97f3fb3a73a73cd4b8c1de8332c",
            "path": "topicUploads\\440fa97f3fb3a73a73cd4b8c1de8332c",
            "size": 58666
        }
    ],
    "counter": 10,
    "tags": [],
    "_id": "5f39673a4a088d0e68c75b8b",
    "title": "Abba",
    "content": "Hello World",
    "isFeatured": true,
    "topicId": "5f390b0efb120e6c90af23ac",
    "__v": 0
}

## Fetch all topics and Topics By Id

### GET http://localhost:3000/topics

Authorization: accessToken

Resposne
[
  {
      "image": [],
      "_id": "5f3908043f7aac656856bb4f",
      "name": "animal",
      "userEmail": "ujjwal",
      "__v": 0
  },
  {
      "image": [],
      "_id": "5f3909fdefcc951a1cc669cd",
      "name": "animal",
      "userEmail": "ujjwal",
      "__v": 0
  },
  {
      "image": [],
      "_id": "5f390ad0efcc951a1cc669cf",
      "name": "animal",
      "userEmail": "ujjwal",
      "__v": 0
  },
  {
      "image": [
          {
              "fieldname": "image",
              "originalname": "shruti.png",
              "encoding": "7bit",
              "mimetype": "image/png",
              "destination": "topicUploads/",
              "filename": "dbd0d802a4e97655c995f3e84a4f595e",
              "path": "topicUploads\\dbd0d802a4e97655c995f3e84a4f595e",
              "size": 47135
          }
      ],
      "_id": "5f390b0efb120e6c90af23ac",
      "name": "animal",
      "userEmail": "ujjwal",
      "__v": 0
  }
]

### Get http://localhost:3000/topics/:topicId

Response
{
    "image": [
        {
            "fieldname": "image",
            "originalname": "1.png",
            "encoding": "7bit",
            "mimetype": "image/png",
            "destination": "topicUploads/",
            "filename": "5e9e9abafd8458a0da2c32d18437ec7a",
            "path": "topicUploads\\5e9e9abafd8458a0da2c32d18437ec7a",
            "size": 47135
        }
    ],
    "_id": "5f3a566fdc7d404ae054c6a4",
    "name": "Birds",
    "userEmail": "ujjwal",
    "__v": 0
}

## Get Articles by Topics and increment count by 1

### GET http://localhost:3000/articles/topic/:topicId?

params: option [1: ascendening order Sorting, -1: descending order Sorting, default: no Sorting]

If loggedIn then listed Featured Article else Non Featured
response
[
    {
        "image": [
            {
                "fieldname": "image",
                "originalname": "happy.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "destination": "topicUploads/",
                "filename": "c0fa821400b15d7882fc4cb3be018853",
                "path": "topicUploads\\c0fa821400b15d7882fc4cb3be018853",
                "size": 58666
            }
        ],
        "counter": 26,
        "tags": [],
        "_id": "5f391756a3a2116e6088decf",
        "title": "Hello",
        "content": "World War",
        "isFeatured": true,
        "topicId": "5f390b0efb120e6c90af23ac",
        "__v": 0
    },
    {
        "image": [
            {
                "fieldname": "image",
                "originalname": "happy.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "destination": "topicUploads/",
                "filename": "e121666d273e82ea6fb21ccde52a259d",
                "path": "topicUploads\\e121666d273e82ea6fb21ccde52a259d",
                "size": 58666
            }
        ],
        "counter": 18,
        "tags": [],
        "_id": "5f3918013ee2cf39d468c562",
        "title": "Hello",
        "content": "World War",
        "isFeatured": true,
        "topicId": "5f390b0efb120e6c90af23ac",
        "__v": 0
    }
]

For logged out User

[
    {
        "image": [
            {
                "fieldname": "image",
                "originalname": "happy.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "destination": "topicUploads/",
                "filename": "e431ee564f6e1f8dcb4910d00e5e78b3",
                "path": "topicUploads\\e431ee564f6e1f8dcb4910d00e5e78b3",
                "size": 58666
            }
        ],
        "counter": 1,
        "tags": [],
        "_id": "5f3a7380e4b13d4918057615",
        "title": "AbbaSahab",
        "content": "fasd",
        "isFeatured": false,
        "topicId": "5f390b0efb120e6c90af23ac",
        "__v": 0
    },
    {
        "image": [
            {
                "fieldname": "image",
                "originalname": "happy.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "destination": "topicUploads/",
                "filename": "fdb77b5fc31ef75c88fe5ba335c08a92",
                "path": "topicUploads\\fdb77b5fc31ef75c88fe5ba335c08a92",
                "size": 58666
            }
        ],
        "counter": 1,
        "tags": [],
        "_id": "5f3a7388e4b13d4918057617",
        "title": "AbbaSahabJi",
        "content": "fasd",
        "isFeatured": false,
        "topicId": "5f390b0efb120e6c90af23ac",
        "__v": 0
    }
]

## Get Article By Id

### GET http://localhost:3000/article/:articleId

For Logged in user

response
[
    {
        "image": [
            {
                "fieldname": "image",
                "originalname": "happy.png",
                "encoding": "7bit",
                "mimetype": "image/png",
                "destination": "topicUploads/",
                "filename": "6753d3c8a77a3a173080f2cefec31581",
                "path": "topicUploads\\6753d3c8a77a3a173080f2cefec31581",
                "size": 58666
            }
        ],
        "counter": 3,
        "tags": [],
        "_id": "5f39177da3a2116e6088ded1",
        "title": "Hello",
        "content": "World War",
        "isFeatured": true,
        "topicId": "5f390b0efb120e6c90af23a",
        "__v": 0
    }
]

For Logout User

if article isFeatured then Restricted else show non featured article

## Adding tags in article

### POST http://localhost:3000/articles

content-type: multipart/form-data
{
  "title": "Abba",
  "image": happy.png,
  "content": "fasd",
  "isFeatured": true,
  "topicId": 5f390b0efb120e6c90af23ac,
  "userEmail": "ujjwal@gmail.com"
  "tags": ["bike", "animal"]
}

# Binary Tree Representation of Articles Count

### GET http://localhost:3000/article/binary?

option: [1: in-order, 2: post-Order, default: pre-order]

request: localhost:3000/article/binary?option=1

response
[
    {
        "key": "5f3917adc8a90958f4d8d7c1",
        "value": {
            "count": 0,
            "title": "Hello"
        }
    },
    {
        "key": "5f3a54356923392cd0b69b42",
        "value": {
            "count": 0,
            "title": "Abba"
        }
    },
    {
        "key": "5f3a54c7dc7d404ae054c6a2",
        "value": {
            "count": 0,
            "title": "Abba"
        }
    },
    {
        "key": "5f3a7380e4b13d4918057615",
        "value": {
            "count": 2,
            "title": "AbbaSahab"
        }
    },
    {
        "key": "5f3a7388e4b13d4918057617",
        "value": {
            "count": 2,
            "title": "AbbaSahabJi"
        }
    },
    {
        "key": "5f39177da3a2116e6088ded1",
        "value": {
            "count": 4,
            "title": "Hello"
        }
    },
    {
        "key": "5f39673a4a088d0e68c75b8b",
        "value": {
            "count": 10,
            "title": "Abba"
        }
    },
    {
        "key": "5f39670d4a088d0e68c75b89",
        "value": {
            "count": 11,
            "title": "abba"
        }
    },
    {
        "key": "5f3966950d7f1a5ba4909b9e",
        "value": {
            "count": 13,
            "title": "main"
        }
    },
    {
        "key": "5f3918013ee2cf39d468c562",
        "value": {
            "count": 18,
            "title": "Hello"
        }
    },
    {
        "key": "5f391756a3a2116e6088decf",
        "value": {
            "count": 26,
            "title": "Hello"
        }
    }
]

<h4> Kindly Go through Readme.md for more details...:) </h4>