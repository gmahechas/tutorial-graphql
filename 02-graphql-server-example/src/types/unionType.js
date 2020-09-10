const { gql } = require('apollo-server');

const typeDefs = gql`
  union Result = Book | Author

  type Book {
    title: String
  }

  type Author {
    name: String
  }

  type Query {
    search: [Result]
  }
`;

const resolvers = {
  Result: {
    __resolveType(obj, context, info) {
      if (obj.name) {
        return 'Author';
      }

      if (obj.title) {
        return 'Book';
      }

      return null;
    },
  },
  Query: {
    search: () => { }
  },
};


exports.typeDefs = typeDefs;
exports.resolvers = resolvers;