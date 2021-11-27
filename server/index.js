const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers").resolvers;
require("./intervalMarkers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: "/subscription",
  },
});

server.listen({
  port: process.env.PORT || 4000
}).then((connection) => console.info(connection.url));
