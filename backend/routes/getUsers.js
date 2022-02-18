var db = require("../db.js")

const users = (req, res) => {
  var sql = "select * from user"
  var params = []

  db.serialize(() => { //Queue this!
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "data": rows
      })
    });
  })
}

module.exports = users;