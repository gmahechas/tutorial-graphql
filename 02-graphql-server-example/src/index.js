const { ApolloServer, AuthenticationError } = require('apollo-server');

/* const { typeDefs, resolvers } = require('./types/basic'); */
/* const { typeDefs, resolvers } = require('./types/customType'); */
/* const { typeDefs, resolvers } = require('./types/customScalarType'); */
/* const { typeDefs, resolvers } = require('./types/unionType'); */
/* const { typeDefs, resolvers, UpperCaseDirective } = require('./types/directives'); */
/* const { typeDefs, resolvers } = require('./types/resolvers-basic'); */
/* const { typeDefs, resolvers } = require('./types/resolvers-2'); */
/* const { typeDefs, resolvers } = require('./types/resolver-chain'); */
/* const { typeDefs, resolvers } = require('./error-handling/default'); */
/* const { typeDefs, resolvers } = require('./error-handling/auth-error'); */
/* const { typeDefs, resolvers } = require('./error-handling/auth-error'); */
const { typeDefs, resolvers } = require('./file-upload/upload');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  formatError: (err) => {
    // First Option
/*     if (err.message.startsWith("must authenticate")) {
      return new Error('Internal server error');
    } */
    // Second Option
/*     if (err.originalError instanceof AuthenticationError) {
      return new Error('Different authentication error message!');
    } */
    return err;
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
