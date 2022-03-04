let db = require("../db.js")
const { verifyToken } = require('../functions');
const auth = (req, res) => {
  try {
    const cookie = req.cookies['jwt'];
    if (!cookie) return
    const claims = verifyToken(cookie)
    if (!claims) {
      return res.status(401).json({ 'message': 'unauthenticated' })
    }

    let sql = `
          SELECT *
          FROM users
          WHERE users.id = ?
    `
    let params = [claims.data.id]
    db.serialize(() => { //Queue this!
      db.get(sql, params, async (err, rows) => {
        if (err) {
          throw err;
        }
        const rowFromDB = {
          id: rows.id,
          name: rows.name,
          email: rows.email,
          role: rows.role
        }
        return res.json({ data: rowFromDB })
      })
    })
  } catch (e) {
    return res.status(401).json({ 'message': 'unauthenticated' })
  }
}

module.exports = auth;
