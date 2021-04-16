const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const axios = require('axios');

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parentValue, args) => {
        /* console.log(request); */
        return axios.default.get(`http://localhost:3000/companies/${parentValue.id}/users`).then(response => response.data);
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve: (parentValue, args, request) => {
        /* console.log(request); */
        return axios.default.get(`http://localhost:3000/companies/${parentValue.companyId}`).then(response => response.data);
      }
    }
  })
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        /*        console.log(parentValue); */
        return axios.default.get(`http://localhost:3000/users/${args.id}`).then(response => response.data);
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        /*        console.log(parentValue); */
        return axios.default.get(`http://localhost:3000/companies/${args.id}`).then(response => response.data);
      }
    }
  }
});

module.exports = { query, UserType };