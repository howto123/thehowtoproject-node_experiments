const { Client } = require('pg');
    
let config;
if(process.env.MODE==="local"){
    config = {
        user: "postgres",
        host: "localhost",
        port: parseInt(process.env.DB_PORT),
        database: "sayingsdb",
        password: process.env.DB_PASSWORD,
        
    };
} else {
    // as in the heroku docs for connection with node js
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    };
}

const client = new Client(config);
module.exports = client;