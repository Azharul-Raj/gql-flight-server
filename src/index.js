const express = require('express');
const cors=require('cors')
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./db/mongoose');
const typeDefs = require('./graphql/schemas/schema');
const resolvers = require('./graphql/resolvers/resolver');

// Create an Express app

const app = express();
app.use(cors())
// Create an Apollo Server with your schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });
const serverFn=async()=>{
  try {
    await server.start()
    server.applyMiddleware({ app });
  } catch (error) {
    console.log(error)
  }
}
serverFn()

// Apply the Apollo middleware to Express


// Define the port for your server
const PORT = process.env.PORT || 4000;
console.log('request comes' )
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
