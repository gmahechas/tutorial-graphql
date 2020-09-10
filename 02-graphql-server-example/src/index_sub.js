const { ApolloServer } = require('apollo-server');

const { typeDefs, resolvers } = require('./suscriptions/01');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      // check from req
      const token = req.headers.authorization || "";

      return { token };
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});