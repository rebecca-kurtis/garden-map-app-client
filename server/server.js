const pg = require('pg');
// load .env data into process.env
require("dotenv").config();
//or native libpq bindings
//var pg = require('pg').native


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

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users;', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

