const authorQuery = require('./authors/authorQuery');
const bookQuery = require('./books/bookQuery');
const userQuery = require('./users/userQuery');

module.exports = {
    ...authorQuery,
    ...bookQuery,
    ...userQuery
  }
  

  