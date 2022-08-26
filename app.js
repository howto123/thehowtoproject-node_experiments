// import libraries
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// import db client
const client = require('./db');
const { validate } = require('./service/validation');
const { createSaying, readSaying, updateSaying, deleteSaying } = require('./service/sayings_service');

// define app
const app = express();

// set parsing
app.use(bodyParser.json());


// ------------endpoints---------------//

// Say hi
app.get('/', (req, res) => {
    res.send("hi! this seems to work...");
})

// create
app.post('/create', (req, res) => {
	try{
		const { id, saying, author, topic } = req.body;
		let body=req.body;
		console.log(validate);
		if(validate(id, saying, author, topic)){
			body = createSaying(id, saying, author, topic);
			res.status(200).send(body);
		}
	} catch (err) {
		res.status(505).send("problem in create endpoint");
		console.log(err.message);
	}
})

// read
app.get('/read', (req, res) => {
	try {
		const { id, saying, author, topic } = req.body;
		let body=req.body;
		console.log(validate);
		if(validate(id, saying, author, topic)){
			body = readSaying(id, saying, author, topic);
			res.status(200).send(body);
		}
	} catch (err) {
		res.status(505).send("problem with in read endpoint");
		console.log(err.message);
	}
})

// update
app.get('/update', (req, res) => {
	try {
		const { id, saying, author, topic } = req.body;
		let body=req.body;
		console.log(validate);
		if(validate(id, saying, author, topic)){
			body = updateSaying(id, saying, author, topic);
			res.status(200).send(body);
		}
	} catch (err) {
		res.status(505).send(body);
		console.log(err.message);
	}
})

// delete
app.get('/delete', (req, res) => {
	try {
		const { id, saying, author, topic } = req.body;
		let body=req.body;
		console.log(validate);
		if(validate(id, saying, author, topic)){
			body = deleteSaying(id, saying, author, topic);
			res.status(200).send(body);
		}
	} catch (err) {
		res.status(505).send("problem in delete endpoint");
		console.log(err.message);
	}
})


// ------------startup---------------//

// Start server
app.listen(parseInt(process.env.PORT), ()=>{
    console.log("server started on Port ", process.env.PORT);
    client.connect((err)=>{
        if(err)console.log("connection to db failed", err.message);
        else console.log("connectoin to db was successful");
		//afterStartUp();
    });
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