const { gql } = require('apollo-server');
const { GraphQLScalarType, Kind } = require('graphql');

const myCustomScalarType = new GraphQLScalarType({
  name: 'MyCustomScalar',
  description: 'Description of my custom scalar type',
  serialize(value) {
    let result;
    // Implement custom behavior by setting the 'result' variable
    return result;
  },
  parseValue(value) {
    let result;
    // Implement custom behavior here by setting the 'result' variable
    return result;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.Int:
      // return a literal value, such as 1 or 'static string'
    }
  }
});

const typeDefs = gql`
  scalar MyCustomScalar

  type Foo {
    aField: MyCustomScalar
  }

  type Query {
    foo: Foo
  }
`;

const resolvers = {
  MyCustomScalar: myCustomScalarType
};


exports.typeDefs = typeDefs;
exports.resolvers = resolvers;