// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors' // Importera cors
import { routes } from './routes/productsRoutes.js'; // Importerar route-funktionerna från productsRoutes.js

const fastify = Fastify({ logger: true }); 

// Aktivera CORS
await fastify.register(cors, {
  origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] // Tillåt alla origins (utveckling) och alla metoder
})

// Registrerar alla routes från routes-filen på Fastify-servern
// Alla endpoints definierade i productsRoutes.js blir nu tillgängliga
fastify.register(routes);

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
};