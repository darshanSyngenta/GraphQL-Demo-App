const authorType = require('./authors/authorType');
const bookType = require('./books/bookType');
const userType = require('./users/userType');

module.exports = {
    ...authorType,
    ...bookType,
    ...userType
}