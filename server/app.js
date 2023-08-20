import express from 'express';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { PORT } from './config.js';

export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the GraphQL server!',
      api: `http://localhost:${PORT}/graphql`,
    });
  });

  const server = new ApolloServer({
    typeDefs, //tipos de datos
    resolvers, //funciones
  });

  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}
