const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    port: parseInt(process.env.DB_PORT),
    database: "sayingsdb",
    password: process.env.DB_PASSWORD,
});

module.exports = client;