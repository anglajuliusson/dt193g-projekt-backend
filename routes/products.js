import { excuteQuery } from '../config/db.js' // Importera hjälpfunktionen för attt köra SQL-frågor mot MySQL

// Funktion som hämtar alla konserter från databasen
export const getAllProducts = async(req, reply) => {
    try {
        // Anropar excuteQuery för att skicka SQL till databasen
        // Resultatet returneras som ett Promise och hanteras med await
        let productsData = await excuteQuery("select * from products", []);
        reply.status(200).send(productsData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som hämtar en specifik produkt baserat på ID
export const getProductById = async(req, reply) => {
    let id = req.params.id;
    try {
        let productsData = await excuteQuery("select * from products where id=?", [id]);
        reply.status(200).send(productsData);
    } catch (err) {
        reply.status(500).send(err);
    }
};

// Funktion som lägger till ny produkt
export const addProduct = async(req, reply) => {
    try {
        const { image, article_number, name, description, category, price, stock_quantity } = req.body;
            
            // Validering: kolla att image är en icke-tom sträng
            if (!image || typeof image !== 'string' || image.trim() === '') {
                return reply.status(400).send({ error: "image måste fyllas i korrekt." });
            }

            // Validering: kolla att article_number är en icke-tom sträng
            if (!article_number || typeof article_number !== 'string' || article_number.trim() === '') {
                return reply.status(400).send({ error: "article_number måste fyllas i korrekt." });
            }

            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }
            
            // Validering: kolla att description är en icke-tom sträng
            if (!description|| typeof description !== 'string' || description.trim() === '') {
                return reply.status(400).send({ error: "description måste fyllas i korrekt." });
            }

            // Validering: kolla att category är en icke-tom sträng
            if (!category || typeof category !== 'string' || category.trim() === '') {
                return reply.status(400).send({ error: "category måste fyllas i korrekt." });
            }
                        
            // Validering: kolla att price är en icke-tom sträng
            if (price === undefined || typeof price !== 'number' || isNaN(price)) {
                return reply.status(400).send({ error: "price måste vara ett giltigt nummer." });
            }            
                        
            // Validering: kolla att stock_quantity är en icke-tom sträng
            if (stock_quantity === undefined || typeof stock_quantity !== 'number' || !Number.isInteger(stock_quantity)) {
                return reply.status(400).send({ error: "stock_quantity måste vara ett heltal." });
            }            

        // SQL-fråga för att lägga till konsert
        let productsData = await excuteQuery("insert into products(image, article_number, name, description, category, price, stock_quantity) values(?, ?, ?, ?, ?, ?, ?)",
            [
                image, 
                article_number, 
                name, 
                description, 
                category,
                price, 
                stock_quantity
            ]
        );
        reply.status(201).send({ message: "Produkt tillagd!", productsData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som uppdaterar specifik produkt baserad på ID
export const updateProduct = async(req, reply) => {
    let id = req.params.id;
    try {
        const { image, article_number, name, description, category, price, stock_quantity } = req.body;

            // Validering: kolla att image är en icke-tom sträng
            if (!image || typeof image !== 'string' || image.trim() === '') {
                return reply.status(400).send({ error: "image måste fyllas i korrekt." });
            }

            // Validering: kolla att article_number är en icke-tom sträng
            if (!article_number || typeof article_number !== 'string' || article_number.trim() === '') {
                return reply.status(400).send({ error: "article_number måste fyllas i korrekt." });
            }

            // Validering: kolla att name är en icke-tom sträng
            if (!name || typeof name !== 'string' || name.trim() === '') {
                return reply.status(400).send({ error: "name måste fyllas i korrekt." });
            }
            
            // Validering: kolla att description är en icke-tom sträng
            if (!description|| typeof description !== 'string' || description.trim() === '') {
                return reply.status(400).send({ error: "description måste fyllas i korrekt." });
            }     
            
            // Validering: kolla att category är en icke-tom sträng
            if (!category || typeof category !== 'string' || category.trim() === '') {
                return reply.status(400).send({ error: "category måste fyllas i korrekt." });
            }
            // Validering: kolla att price är en icke-tom sträng
            if (price === undefined || typeof price !== 'number' || isNaN(price)) {
                return reply.status(400).send({ error: "price måste vara ett giltigt nummer." });
            }            
                        
            // Validering: kolla att stock_quantity är en icke-tom sträng
            if (stock_quantity === undefined || typeof stock_quantity !== 'number' || !Number.isInteger(stock_quantity)) {
                return reply.status(400).send({ error: "stock_quantity måste vara ett heltal." });
            }  

        // SQL-fråga för att uppdatera produkt
        let productsData = await excuteQuery(`update products set image=?, article_number=?, name=?, description=?, category=?, price=?, stock_quantity=? where id=${id}`,
            [
                image, 
                article_number, 
                name, 
                description, 
                category,
                price, 
                stock_quantity
            ]
        );
        reply.status(201).send({ message: "Produkt uppdaterad!", productsData});
    } catch (err) {
        reply.status(400).send(err);
    }
};

// Funktion som raderar en specifik produkt baserat på ID
export const deleteProductById = async(req, reply) => {
    let id = req.params.id;
    try {
        let productsData = await excuteQuery("delete from products where id=?", [id]);
        reply.status(200).send({ message: "Produkt raderad!", productsData});
    } catch (err) {
        reply.status(500).send(err);
    }
};