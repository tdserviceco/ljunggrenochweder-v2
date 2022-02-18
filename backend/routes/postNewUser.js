let db = require("../db.js")
const { hashGenerator } = require('../functions');
const getUsersByRole = (req, res) => {
  let sql = 'INSERT INTO user (name, username, email, password, role) VALUES (?,?,?,?,?)'
  let params = [req.body.name, req.body.username, req.body.email, hashGenerator(req.body.password), 'customer']

  db.serialize(() => { //Queue this!
    db.run(sql, params, function (err, rows) {
      if (err) return res.status(400).json({ "error": err.message });
      return res.status(200).json({
        "message": "success",
        "data": `New user been added`
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


