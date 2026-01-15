import { addProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from './products.js'; // Importerar controller-funktionerna från products.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/products', getAllProducts); // Route för att hämta alla produkter
    fastify.get('/products/:id', getProductById); // Route för att hämta en produkt med specifikt id
    fastify.post('/products', addProduct); // Route för att lägga till ny produkt
    fastify.put('/products/:id', updateProduct); // Route för att uppdatera en produkt med specifikt id
    fastify.delete('/products/:id', deleteProductById); // Route för att radera en produkt med specifikt id
};