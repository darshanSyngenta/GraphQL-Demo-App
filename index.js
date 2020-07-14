
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const express = require('express');
const x = require('apollo-server-express');
const ApolloServer = x.ApolloServer;
const gql = x.gql;
const app = express();
const typeDefs = require('./graphql/modules/typeDefs');
const resolvers = require('./graphql/modules/resolver');

const server = new ApolloServer({
typeDefs: typeDefs.getTypeDefs(),
resolvers:resolvers,
context: ({req}) => {
  console.log(req.headers.currentuser)
  return {
      
      currentUser:req.headers.currentuser,
      headers: req.headers,
      prisma
    };
}
});

server.applyMiddleware({ app, path: '/graphiql' });
 
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
}); 