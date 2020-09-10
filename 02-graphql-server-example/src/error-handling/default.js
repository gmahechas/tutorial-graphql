const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    readError: String
  }
`;

const resolvers = {
  Query: {
    readError: (parent, args, context) => {
      fs.readFileSync('/does/not/exist');
    },
  },
};


exports.typeDefs = typeDefs;
exports.resolvers = resolvers;