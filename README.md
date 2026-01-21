# Lundbergs Bryggeri - Backend

Detta är backend-delen av Lundbergs Bryggeri-projektet. Den tillhandahåller en REST API för hantering av produkter, kategorier och användare.

## Teknologier
- Node.js
- Ramverk: Fastify
- JWT för autentisering
- JSON som dataformat

## Funktioner
- Användarautentisering med JWT
- Hantering av produkter (CRUD)
- Hantering av produktkategorier (CRUD)
- Hantering av användare (CRUD, profil)
- Säker API-access med token

## Starta servern
- Kommando: npm run start
- Servern körs då på http://localhost:3000.

## Endpoints
| Endpoint          | Metod          | Beskrivning                      |
| ----------------- | -------------- | -------------------------------- |
| `/login`          | POST           | Logga in användare               |
| `/staff/me`       | GET            | Hämta inloggad användares profil |
| `/staff/:id`      | GET/PUT/DELETE | CRUD på användare                |
| `/products`       | GET/POST       | Lista / skapa produkter          |
| `/products/:id`   | GET/PUT/DELETE | CRUD på produkt                  |
| `/categories`     | GET/POST       | Lista / skapa kategorier         |
| `/categories/:id` | GET/PUT/DELETE | CRUD på kategori                 |
