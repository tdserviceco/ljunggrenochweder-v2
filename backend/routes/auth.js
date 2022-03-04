let db = require("../db.js")
const { createToken, deCryptHash } = require('../functions');
const auth = (req, res) => {
  // console.log(req.params.role)
  let sql = `
          SELECT *
          FROM ${req.params.role}
          WHERE ${req.params.role}.email = ?
    `
  let params = [req.body.email]
  db.serialize(() => { //Queue this!
    db.get(sql, params, async (err, rows) => {
      if (rows === undefined) {
        res.status(400).json({
          "message": 'Password or Email is invalid!'
        });
        return;
      }
      const trueOrFalsePassword = await deCryptHash(req.body.password, rows.password)
      if (rows.email === req.body.email && trueOrFalsePassword) {
        return res.status(200).json({
          "status": 200,
          "data": {
            jwt: createToken(rows),
            value: rows
          }
        })
      }
      else {
        return res.status(400).json({
          "message": "Password or Email is invalid!",
        })
      }
    });
  })
}

module.exports = auth;