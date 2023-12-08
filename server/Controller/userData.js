const { pool } = require("../Database/index.js");
exports.createUser = async (req, res) => {
  res.json("i am controller");
};

exports.getUser = async (req, res) => {
  const pool1 = await pool.connect();
  try {
    const data = await pool1.query("select * from employee");
    if (data.rows.length > 0) {
      res.json({ allData: data.rows });
    }
  } catch (error) {
    res.json({ error, msg: "server error" });
  } finally {
    pool1.release(true);
  }
};

// function of delete this user from database

exports.deleteUser = async (req, res) => {
  let { id } = req.params;
  const pool1 = await pool.connect();
  try {
    // const data = await pool1.query("select * from employee");
    // console.log("iii", data);
    const del = await pool1.query("delete from employee where id=$1", [id]);
    if (del.rowCount == 1) {
      const data = await pool1.query("select * from employee");
      // console.log("wov", data.rows);

      res.json({ allData: data.rows });
    }
  } catch (error) {
    res.json({ error, msg: "some wrong" });
  } finally {
    (await pool1).release(true);
  }
};
