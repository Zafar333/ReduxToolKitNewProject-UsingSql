const express = require("express");
const cors = require("cors");
const { route } = require("./routes/index.js");
const { pool } = require("./Database/index.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use(route());

app.listen(4000, () => {
  console.log(`server is live on http://localhost:4000`);
});
// pool();
