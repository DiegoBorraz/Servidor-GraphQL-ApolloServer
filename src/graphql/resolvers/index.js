const { mergeResolvers } = require('merge-graphql-schemas');

const User = require('./User/');

const resolvers = [User];

module.exports = mergeResolvers(resolvers);