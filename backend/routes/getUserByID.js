let db = require("../db.js")

const getUserByID = (req, res) => {
  let sql = `
          SELECT *
          FROM user
          WHERE id = ?
    `
  const params = [req.params.id]

  db.serialize(() => { //Queue this
    db.get(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      return rows ? res.status(200).json({
        "message": "success",
        "data": rows
      }) : res.status(400).json({
        "message": "error",
        "data": "Cant get that specific id"
      })
    })
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}

module.exports = getUserByID;