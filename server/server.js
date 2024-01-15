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
// let client = new pg.Client(process.env.POSTGRES_URL);

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
  db.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all tips
app.get("/tips", (req, res) => {
  db.query("SELECT * FROM tips", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all plots/id
app.get("/plots/:id", (req, res) => {

  const plotId = req.params.id;
  
  db.query(
    `SELECT DISTINCT
    users.user_id AS user_id, 
    tips.tips_id AS tip_id, 
    CONCAT (users.first_name, ' ', users.last_name) AS user_name,
    users.description AS uDescription,
    tips.description AS tDescription,
    plantedPlants.plant_id AS ppPlantId
    FROM users
    JOIN plots on users.user_id = plots.user_id
    JOIN plantedPlants on plots.plot_id = plantedPlants.plot_id
    JOIN tips on users.user_id = tips.user_id
    WHERE plots.plot_id = $1
    AND tips.user_id = users.user_id 
    GROUP BY users.user_id, uDescription, ppPlantId, tDescription, tips.user_id, tips.tips_id
    ORDER BY user_id, tip_id;`, [plotId]
    , (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
  });
});

// Get all plants
app.get("/plants", (req, res) => {
  db.query("SELECT * FROM plants", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all gardens
app.get("/gardens", (req, res) => {
  db.query("SELECT * FROM gardens", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all plots
app.get("/plots", (req, res) => {
  db.query("SELECT * FROM plots", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all photos
app.get("/photos", (req, res) => {
  db.query("SELECT * FROM photos", (error, results) => {
    if (error) {
      throw error;
    }
    console.log('Results:', results)
    res.status(200).send(results.rows);
  });
});

// Get all plantedPlants
app.get("/plantedPlants", (req, res) => {
  db.query("SELECT * FROM plantedPlants", (error, results) => {
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
