# map-objects-server

Server side for [markers-visualizer](https://github.com/tomyitav/markers-visualizer) project, using:

+ typescript
+ serverless-http
+ serverless-offline
+ Mongoose ODM
+ [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator)
+ merge-graphql-schemas

This project demonstrates how to easily deploy a server, based on the [graphql-server-typed](https://github.com/tomyitav/graphql-server-typed)
starter, as AWS lambda.

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/tomyitav/map-objects-server.git
npm install
```

Then, initialize a .env file in project root directory, with the following variables:
DB_URLS, REPLICA_NAME, USERNAME, PASSWORD

## Starting the server locally

```
npm run sls:offline
```

The server will run on port 3000. You can change this by editing config file.

## Run server in production on AWS lambda :rocket:

```
npm run sls:deploy
```

That's it! The server will be deployed as a lambda on AWS