const express = require("express");
const pool = require("./db");

const app = express();
const port = process.env.PORT || 3100;

app.get("/users", async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
