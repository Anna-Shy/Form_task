const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1000",
  database: "mydb"
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const mail = req.body.mail;
  const descript = req.body.descript;

  db.query(
    "INSERT INTO user (name, mail, descript) VALUES (?,?,?)",
    [name, mail, descript],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
