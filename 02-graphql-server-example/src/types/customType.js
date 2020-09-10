const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar JSON

  type Foo {
    aField: JSON
  }

  type Query {
    foo: Foo
  }
`;

const resolvers = {
  JSON: GraphQLJSON
};

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;