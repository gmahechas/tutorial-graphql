const { gql, SchemaDirectiveVisitor } = require('apollo-server');
const { defaultFieldResolver } = require('graphql');

class UpperCaseDirective extends SchemaDirectiveVisitor {

  visitFieldDefinition(field) {

    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
    
  }

}

const typeDefs = gql`
  directive @upper on FIELD_DEFINITION

  type Query {
    hello: String @upper
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return 'Hello world!';
    },
  },
};

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;
exports.UpperCaseDirective = UpperCaseDirective;