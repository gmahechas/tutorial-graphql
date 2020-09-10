const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
  }
`;

const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    }
  }
};

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;