const { PubSub, gql } = require('apollo-server');

const pubsub = new PubSub();

const POST_ADDED = 'POST_ADDED';

const typeDefs = gql`
  type Subscription {
    postAdded: Post
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(author: String, comment: String): Post
  }

  type Post {
    author: String
    comment: String
  }
`;

const resolvers = {
  Subscription: {
    postAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: () => pubsub.asyncIterator([POST_ADDED]),
    },
  },
  Query: {
    posts(root, args, context) {
      return postController.posts();
    },
  },
  Mutation: {
    addPost(root, args, context) {
      pubsub.publish(POST_ADDED, { postAdded: args });
      return postController.addPost(args);
    },
  },
};

exports.typeDefs = typeDefs;
exports.resolvers = resolvers;