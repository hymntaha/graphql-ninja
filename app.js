const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
let users = require('./data').users;
let cars = require('./data').cars;
const me = users[0];

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: Int!): User

    cars: [Car]
    car(id: Int!): Car

    me: User
  }

  type Mutation {
    makeUser(id: Int!, name: String!): User!
    removeUser(id: Int!): Boolean
    createCar(id: Int!, make: String!, model: String!, color: String!): Car!
    removeCar(id: Int!): Boolean
  }

  type User {
    id: ID!
    name: String!
    car: [Car]
  }

  type Car {
    id: ID!
    make: String!
    model: String!
    color: String!
    ownder: User!
  }
`;



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(9876, () =>
  console.info('Apollo GraphQL server is running on port 9876'),
);
