const { gql } = require('apollo-server-express');


module.exports = gql`
     extend type Query {
        cars: [Car]
        car(id: Int!): Car
    }

    extend type Mutation {
        createCar(id: Int!, make: String!, model: String!, color: String!): Car!
        removeCar(id: Int!): Boolean
    }

    type Car {
        id: ID!
        make: String!
        model: String!
        color: String!
        ownder: User!
    }
`;
