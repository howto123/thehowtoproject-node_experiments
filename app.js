const express = require('express');
require('dotenv').config();

// import db client
const client = require('./db');
// define app
const app = express();

// ------------endpoints---------------//

// Say hi
app.get('/', (req, res) => {
    res.send("hi! this seems to work...");
})
// ------------startup---------------//

// Start server
app.listen(parseInt(process.env.PORT), ()=>{
    console.log("server started on Port ", process.env.PORT);
    client.connect((err)=>{
        if(err)console.log("connection to db failed", err.message);
        else console.log("connectoin to db was successful");
    });
    afterStartUp();
});

// ------------main---------------//
function afterStartUp(){

    // check the time
    client.query('SELECT NOW()', (err, res) => {
        if (err) console.log("error while querying: ", err);
        console.log(res.rows[0]);
      });

      // create a table
      console.log("create table");
      client.query('CREATE TEMP TABLE people(id SERIAL PRIMARY KEY, name VARCHAR NOT NULL);', (err, res) => {
        if (err) console.log("error while querying: ");
        console.log(res.rows[0]);
      });

      // insert
      console.log("insert");
      client.query("INSERT INTO people (name) VALUES ('somebody');", (err, res) => {
        if (err) console.log("error while querying: ");
        console.log(res.rows[0]);
      });

      // select
      console.log("select *");
      client.query("SELECT * FROM people;", (err, res) => {
        if (err) console.log("error while querying: ");
        console.log(res.rows);
      });
}