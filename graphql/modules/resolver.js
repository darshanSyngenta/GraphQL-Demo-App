const rootQuery = require('./rootQuery');
const rootMutation = require('./rootMutation');
const rootType = require('./rootType');

module.exports = {
    Query: {
        ...rootQuery
      },
      Mutation: {
        ...rootMutation
      },
      ...rootType
    }

