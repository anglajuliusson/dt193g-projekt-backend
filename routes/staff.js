import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

// Funktion som hämtar alla användare från databasen
export const getAllStaff = async(req, reply) => {
    try {
        // Anropar excuteQuery för att skicka SQL till databasen
        // Resultatet returneras som ett Promise och hanteras med await
        let staffData = await excuteQuery("select * from staff", []);
        reply.status(200).send(staffData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som hämtar en specifik användare baserat på ID
export const getStaffById = async(req, reply) => {
    let id = req.params.id;
    try {
        let staffData = await excuteQuery("select * from staff where id=?", [id]);
        reply.status(200).send(staffData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som lägger till ny användare
export const addStaff = async(req, reply) => {
    try {
        const { image, username, name, email, phone } = req.body;
            
            // Validering: kolla att username är en icke-tom sträng
            if (!username || typeof username !== 'string' || username.trim() === '') {
                return reply.status(400).send({ error: "username måste fyllas i korrekt." });
            }

            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }
                    
            // Validering: kolla att email är en icke-tom sträng
            if (!email || typeof email !== 'string' || email.trim() === '') {
                return reply.status(400).send({ error: "email måste fyllas i korrekt." });
            }

            // Validering: kolla att phone är en icke-tom sträng
            if (!phone || typeof phone !== 'string' || phone.trim() === '') {
                return reply.status(400).send({ error: "phone måste fyllas i korrekt." });
            }

        // SQL-fråga för att lägga till konsert
        let staffData = await excuteQuery("insert into staff(image, username, name, email, phone) values(?, ?, ?, ?, ?)",
            [
                image,
                username, 
                name, 
                email, 
                phone
            ]
        );
        reply.status(201).send({ message: "Användare tillagd!", staffData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som uppdaterar specifik användare baserad på ID
export const updateStaff = async(req, reply) => {
    let id = req.params.id;
    try {
        const { image, username, name, email, phone } = req.body;

            // Validering: kolla att username är en icke-tom sträng
            if (!username || typeof username !== 'string' || username.trim() === '') {
                return reply.status(400).send({ error: "username måste fyllas i korrekt." });
            }

            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }
                    
            // Validering: kolla att email är en icke-tom sträng
            if (!email || typeof email !== 'string' || email.trim() === '') {
                return reply.status(400).send({ error: "email måste fyllas i korrekt." });
            }

            // Validering: kolla att phone är en icke-tom sträng
            if (!phone || typeof phone !== 'string' || phone.trim() === '') {
                return reply.status(400).send({ error: "phone måste fyllas i korrekt." });
            }

        // SQL-fråga för att uppdatera kategori
        let staffData = await excuteQuery(`update staff set image=?, username=?, name=?, email=?, phone=? where id=${id}`,
            [
                image,
                username, 
                name, 
                email, 
                phone
            ]
        );
        reply.status(201).send({ message: "Användare uppdaterad!", staffData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som raderar en specifik användare baserat på ID
export const deleteStaffById = async(req, reply) => {
    let id = req.params.id;
    try {
        let staffData = await excuteQuery("delete from staff where id=?", [id]);
        reply.status(200).send({ message: "Användare raderad!", staffData});
    } catch (err) {
        reply.status(500).send(err);
    }
};