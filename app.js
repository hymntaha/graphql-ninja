const express = require('express');
const app = express();
const {ApolloServer} = require('apollo-server-express');

const typeDefs = null;
const resolvers = null;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({app})

app.listen(9876, () => console.info('Apollo GraphQL server is running on port 3000'));

