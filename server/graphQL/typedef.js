const {gql} = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id : ID,
        fullname: String,
        email: String,
        friends : [User],
        accountSource : String,
        frindCount : Int
    }
    type Auth{
        token: ID!
        user: User
    }
    type Query {
        users : [User]
        user(username: String!) : User
      }
      type Mutation {
        login(email: String!, password: String!): User
        addLocalUser(fullname: String!, email: String!, password: String!): User
        addFriend(friendId: ID!): User
      }
`;

module.exports = typeDefs;