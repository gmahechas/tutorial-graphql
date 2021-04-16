const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const axios = require('axios');
const { UserType } = require('./../queries')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLInt }
      },
      resolve(parentValue, { firstName, age }) {
        /*        console.log(parentValue); */
        return axios.default.post(`http://localhost:3000/users`, { firstName, age }).then(response => response.data);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parentValue, { id }) {
        /*        console.log(parentValue); */
        return axios.default.delete(`http://localhost:3000/users/${id}`).then(response => response.data);
      }
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLInt }
      },
      resolve(parentValue, { id, firstName, age, companyId }) {
        /*        console.log(parentValue); */
        return axios.default.patch(`http://localhost:3000/users/${id}`, { firstName, age, companyId }).then(response => response.data);
      }
    }
  }
});

module.exports = mutation;