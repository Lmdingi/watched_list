const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "db",
  port: process.env.DB_PORT || 5432,
});

module.exports = { pool };
