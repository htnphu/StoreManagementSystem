
# Store Management System

Store Management System is a web application that allows store owners to manage their stores and customers to search for stores.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository to your local machine:**

   ```bash
   git clone https://github.com/htnphu/StoreManagementSystem.git

2. **Install the project dependencies (if missing):**
   ```bash
    npm install

3. **Update database config at db.config.js**: Open the `db.config.js` file and make the necessary changes to the database configuration, including the `database`, `username`, and `password` fields. For example:

   ```javascript
   // db.config.js
    const dbConfig = {
        host: 'your-host',
        username: 'your-database-username',
        password: 'your-database-password',
        database: 'your-database-name',
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        },
    };


4. **Start the development server:**
   ```bash
   npm start

## Usage
1. **Register as a Store Owner**: Store owners can register by sending a POST request to `/api/owners/register`. The request body should include details like full name, phone number, email, etc.

   Example JSON request body:

   ```json
   {
     "fullName": "John Anderson",
     "phoneNumber": "0123456789",
     "email": "johnanderson@examplegmail.com",
     "dateOfBirth": "1997-08-09",
     "avatar": "johnanderson.jpg",
     "gender": "Male"
   }


2. **Register a Store**: After registration, store owners can send a POST request to `/api/stores/register` to create a new store.

   Example JSON request body:

   ```json
   {
     "name": "Toslie Dress",
     "logo": "store_logo.jpg",
     "address": "4087 Geraldine Lane, Pontotoc City, Texas State, United States",
     "phoneNumber": "333-444-5555",
     "email": "tosliedress@info.com",
     "ownerId": "{existed owner-id}"
   }


3. **Find Stores by Owner ID**: Users can find stores by sending a GET request to `/api/stores/{ownerId}`, where `{ownerId}` is the ID of the store owner.


