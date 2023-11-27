// PostGres database client/connection setup

const { Pool } = require("pg");

const connectionString = {
  connectionString: process.env.POSTGRES_URL
};

const db = new Pool(connectionString);

db.connect();

module.exports = db;