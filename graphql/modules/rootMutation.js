const authorMutation = require('./authors/authorMutation');
const bookMutation = require('./books/bookMutation');
const userMutation = require('./users/userMutation');


module.exports = {
    ...authorMutation,
    ...bookMutation,
    ...userMutation
}