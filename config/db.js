const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Add SSL configuration
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
