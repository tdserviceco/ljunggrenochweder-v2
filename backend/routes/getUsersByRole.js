let db = require("../db.js")

const getUsersByRole = (req, res) => {
  let sql = `
          SELECT *
          FROM user
          WHERE role = ?
    `
  const params = [req.params.role]
  db.get(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    return rows ? res.status(200).json({
      "message": "success",
      "value": rows
    }) : res.status(400).json({
      "message": "error",
      "value": "Cant get that specific role"
    })
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}

module.exports = getUsersByRole;