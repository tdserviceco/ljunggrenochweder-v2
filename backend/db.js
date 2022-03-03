const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./db/bookingsystem.db', (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }
  console.log('SQLite3 is online')
});


module.exports = db