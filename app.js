const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// Configure Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',

});

// Connect
db.connect((err)=>{
    if(!err){
        console.log("Mysql connected");
        console.log(".env: ", process.env.myJsVariable);
    }
});


const app = express();

// Say hi
app.get('/', (req, res) => {
    res.send("hi! this seems to work...");
})

// Create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err){console.log("error!: ", err);}
        console.log(result);
        res.send('database created');
    })
})

// Create table
app.get('createtable', () => {
    let sql = '';
})


app.listen(3001, ()=>console.log("server started this is new text"));