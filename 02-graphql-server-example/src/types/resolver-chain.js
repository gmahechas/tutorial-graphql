const { gql } = require('apollo-server');

const libraries = [
  {
    branch: 'downtown'
  },
  {
    branch: 'riverside'
  },
];

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    branch: 'riverside'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    branch: 'downtown'
  },
];

const typeDefs = gql`

  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }

  type Query {
    libraries: [Library]
  }
`;

const resolvers = {
  Query: {
    libraries() {
      return libraries;
    }
  },
  Library: {
    books(parent) {
      return books.filter(book => book.branch === parent.branch);
    }
  },
  Book: {
    author(parent) {
      return {
        name: parent.author
      };
    }
  }
};

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;
