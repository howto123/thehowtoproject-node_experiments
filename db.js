const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "sayingsdb",
    password: process.env.DB_PASSWORD,
    port: 8085
});

module.exports = client;