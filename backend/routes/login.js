let db = require("../db.js")
const { createToken, deCryptHash } = require('../functions');
const login = (req, res) => {
  // console.log(req.params.role)
  let sql = `
          SELECT *
          FROM users
          WHERE users.email = ?
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
        const rowFromDB = {
          id: rows.id,
          name: rows.name,
          email: rows.email,
          role: rows.role
        }
        //Save the row id as a cookie for auth later
        res.cookie('jwt', createToken({ id: rows.id }), {
          httpOnly: true,
          sameSite: "Lax",
          maxAge: 24 * 60 * 60 * 1000 // 24h
        })

        //Send our new filtered rows to our frontend
        return res.status(200).json({
          "status": 200,
          "data": rowFromDB
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

module.exports = login;