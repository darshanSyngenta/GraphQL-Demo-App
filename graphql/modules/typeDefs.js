const path = require('path');
const {
  fileLoader,
  mergeTypes
} = require('merge-graphql-schemas');

module.exports.getTypeDefs = ()=> {
    const typesArray = fileLoader(path.join('./graphql', `./**/*.graphql`));
    return mergeTypes(typesArray, { all: true });
  }

