let db = require("../db.js")

const getStaffs = (req, res) => {

  let sql = "select * from staffs"
  let params = []

  db.serialize(() => { //Queue this!
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "value": rows
      })
    });
  })
}

module.exports = getStaffs;