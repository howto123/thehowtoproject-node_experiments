const { Client } = require('pg');

const client = new Client({
    DATABASE_URL: process.env.DATABASE_URL,
});

module.exports = client;