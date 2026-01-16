import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

// Funktion som hämtar alla kategorier från databasen
export const getAllCategories = async(req, reply) => {
    try {
        // Anropar excuteQuery för att skicka SQL till databasen
        // Resultatet returneras som ett Promise och hanteras med await
        let categoriesData = await excuteQuery("select * from categories", []);
        reply.status(200).send(categoriesData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som hämtar en specifik kategori baserat på ID
export const getCategoryById = async(req, reply) => {
    let id = req.params.id;
    try {
        let categoriesData = await excuteQuery("select * from categories where id=?", [id]);
        reply.status(200).send(categoriesData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som lägger till ny kategori
export const addCategory = async(req, reply) => {
    try {
        const { name } = req.body;
            
            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }

        // SQL-fråga för att lägga till konsert
        let categoriesData = await excuteQuery("insert into categories(name) values(?)",
            [
                name
            ]
        );
        reply.status(201).send({ message: "Kategori tillagd!", categoriesData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som uppdaterar specifik kategori baserad på ID
export const updateCategory = async(req, reply) => {
    let id = req.params.id;
    try {
        const { name } = req.body;

            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }

        // SQL-fråga för att uppdatera kategori
        let categoriesData = await excuteQuery(`update categories set name=? where id=${id}`,
            [
                name
            ]
        );
        reply.status(201).send({ message: "Kategori uppdaterad!", categoriesData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som raderar en specifik konsert baserat på ID
export const deleteCategoryById = async(req, reply) => {
    let id = req.params.id;
    try {
        let categoriesData = await excuteQuery("delete from categories where id=?", [id]);
        reply.status(200).send({ message: "Kategori raderad!", categoriesData});
    } catch (err) {
        reply.status(500).send(err);
    }
};