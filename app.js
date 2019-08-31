const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const users = require('./data').users;
const me = users[0]
const typeDefs = gql`
  type Query {
    users: [User]
    me: User
  }

  type User {
    id: ID!
    name: String!
  }
`;

const resolvers = {

  Query: {
    users: () => users,
    me: () => me
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(9876, () =>
  console.info('Apollo GraphQL server is running on port 9876'),
);
