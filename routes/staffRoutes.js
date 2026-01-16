import { addStaff, deleteStaffById, getAllStaff, getStaffById, updateStaff } from './staff.js'; // Importerar controller-funktionerna från staff.js

export async function routes(fastify) {
    // Registrerar GET-route och kopplar till controller-funktionen
    fastify.get('/staff', getAllStaff); // Route för att hämta alla användare
    fastify.get('/staff/:id', getStaffById); // Route för att hämta en användare med specifikt id
    fastify.post('/staff', addStaff); // Route för att lägga till ny användare
    fastify.put('/staff/:id', updateStaff); // Route för att uppdatera en användare med specifikt id
    fastify.delete('/staff/:id', deleteStaffById); // Route för att radera en användare med specifikt id
};