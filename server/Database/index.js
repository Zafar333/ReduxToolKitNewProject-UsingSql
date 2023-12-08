const { Pool } = require("pg");
exports.pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "pagination",
  password: "admin",
  port: "5432",
});
