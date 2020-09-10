const { gql, AuthenticationError } = require('apollo-server');

const typeDefs = gql`
  type Query {
    authenticationError: String
  }
`;

const resolvers = {
  Query: {
    authenticationError: (parent, args, context) => {
      throw new AuthenticationError('must authenticate');
    },
  },
};


exports.typeDefs = typeDefs;
exports.resolvers = resolvers;