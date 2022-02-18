const sqlite3 = require('sqlite3').verbose()
const { hashGenerator } = require('./functions');

let db = new sqlite3.Database('./db/bookingsystem.db', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            username text UNIQUE,
            email text UNIQUE, 
            password text,
            role text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          let insert = 'INSERT INTO user (name, username, email, password, role) VALUES (?,?,?,?,?)'
          db.run(insert, ["tommy", "tdserviceco", "admin@example.com", hashGenerator("admin123456"), "superadmin"])
          db.run(insert, ["tommy", "tdserviceco2", "admin2@example.com", hashGenerator("admin123456"), "superadmin"])
          db.run(insert, ["tommy", "tdserviceco3", "admin3@example.com", hashGenerator("admin123456"), "superadmin"])

          db.run(insert, ["tommy", "tdserviceco4", "admin4@example.com", hashGenerator("admin123456"), "admin"])
          db.run(insert, ["tommy", "tdserviceco5", "admin5@example.com", hashGenerator("admin123456"), "customer"])
          db.run(insert, ["tommy", "tdserviceco6", "admin6@example.com", hashGenerator("admin123456"), "customer"])
          db.run(insert, ["tommy", "tdserviceco7", "admin7@example.com", hashGenerator("admin123456"), "customer"])
        }
      });
  }
});


module.exports = db