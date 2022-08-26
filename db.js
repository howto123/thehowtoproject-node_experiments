const { Client } = require('pg');

const client = new Client({
    DATABASE_URL: process.env.DATABASE_URL,
    password: process.env.DB_PASSWORD
});

module.exports = client;