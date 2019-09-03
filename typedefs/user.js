const { gql } = require('apollo-server-express');


module.exports = gql`
    type Query {
        users: [User]
        user(id: Int!): User

        me: User
    }

    type Mutation {
        makeUser(name: String!): User!
        removeUser(id: Int!): Boolean
    }

    type User {
        id: ID!
        name: String!
        car: [Car]
    }
`;
