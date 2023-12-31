const pg = require('pg');
const express = require("express");
const cors = require("cors");

// load .env data into process.env
require("dotenv").config();
const dotenv = require("dotenv");
const db = require("../db/connection");
//or native libpq bindings
//var pg = require('pg').native

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


//example code
// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page
let client = new pg.Client(process.env.POSTGRES_URL);

// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

// use example that works 
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT * FROM users;', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM products", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
