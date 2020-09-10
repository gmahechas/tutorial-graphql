const { gql } = require('apollo-server');

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet'
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy'
  }
];

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    user(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return users.find(user => user.id === args.id);
    }
  }
}

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;