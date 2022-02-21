let db = require("../db.js")
const { createToken, deCryptHash } = require('../functions');
const auth = (req, res) => {
  let sql = `
          SELECT *
          FROM user
          WHERE user.email = ?
    `
  let params = [req.body.email]

  db.serialize(() => { //Queue this!
    db.get(sql, params, async (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      const trueOrFalsePassword = await deCryptHash(req.body.password, rows.password)
      if (rows.email === req.body.email && trueOrFalsePassword) {
        return res.status(200).json({
          "message": "success",
          "token": createToken(rows)
        })
      }
      else {
        return res.status(400).json({
          "message": "error",
          "data": "Password or Email is invalid!"
        })
      }
    });
  })
}

module.exports = auth;