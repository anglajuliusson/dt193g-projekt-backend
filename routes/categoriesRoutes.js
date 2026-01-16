import { addCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategory } from './categories.js'; // Importerar controller-funktionerna från categories.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/categories', getAllCategories); // Route för att hämta alla kategorier
    fastify.get('/categories/:id', getCategoryById); // Route för att hämta en kategori med specifikt id
    fastify.post('/categories', addCategory); // Route för att lägga till ny kategori
    fastify.put('/categories/:id', updateCategory); // Route för att uppdatera en kategori med specifikt id
    fastify.delete('/categories/:id', deleteCategoryById); // Route för att radera en kategori med specifikt id
};