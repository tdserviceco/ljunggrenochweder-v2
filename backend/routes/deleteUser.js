let db = require("../db.js")
const getUsersByRole = (req, res) => {
  let sql = 'DELETE FROM user WHERE id=?'
  let params = [req.params.id];

  db.serialize(() => { //Queue this!
    db.run(sql, params, function (err, rows) {
      if (err) return res.status(400).json({ "error": err.message });
      return res.status(200).json({
        "message": "success",
        "data": `Row(s) deleted ${this.changes}`
      })
    })
  })

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}

module.exports = getUsersByRole;


