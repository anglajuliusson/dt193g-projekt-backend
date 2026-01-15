// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors' // Importera cors
import { routes } from './routes/productsRoutes.js'; // Importerar route-funktionerna från productsRoutes.js
import fastifyStatic from "@fastify/static";
import path from "path";

const fastify = Fastify({ logger: true }); 

// Aktivera CORS
await fastify.register(cors, {
  origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] // Tillåt alla origins (utveckling) och alla metoder
})

// Serve statiska filer
await fastify.register(fastifyStatic, {
    root: path.join(process.cwd(), "images"), // "images"-mappen i projektroten
    prefix: "/images/",                       // URL-prefix
  });

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