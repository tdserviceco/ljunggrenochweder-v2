const sqlite3 = require('sqlite3').verbose()
const { hashGenerator } = require('./functions');

const DBSOURCE = "./db/bookingsystem.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE staffs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            role text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table: staffs, already exist');
        } else {
          console.log('Creating table');
          // Table just created, creating some rows
          let insert = 'INSERT INTO staffs (name, email, password, role) VALUES (?,?,?,?)'
          db.run(insert, ["tommy danielsson", "tdserviceco@gmail.com", hashGenerator("admin123456"), "Super admin"])
          db.run(insert, ["tim varvikko", "tim.varvikko59@gmail.com", hashGenerator("admin123456"), "Super admin"])
          console.log('Table with name of: staffs, has been created with two super admins')
        }
      });

    db.run(`CREATE TABLE customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            password TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table: customers, already exist');
        } else {
          console.log('Table: customers, created')
        }
      })

    db.run(`CREATE TABLE staff_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            staff_id INTEGER,
            schedule TEXT
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table: staff_schedule, already exist');
        } else {
          console.log('Table: staff_schedule, created')
        }
      })

    db.run(`CREATE TABLE services (
           	id INTEGER PRIMARY KEY AUTOINCREMENT,
            staff_id INTEGER,
            service_name TEXT
            )`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table: services, already exist');
        } else {
          console.log('Table: services, created')
        }
      })

    db.run(`CREATE TABLE bookings (
        	id INTEGER PRIMARY KEY AUTOINCREMENT,
          staff_id INTEGER,
          customer_id INTEGER
          )`,
      (err) => {
        if (err) {
          // Table already created
          console.log('Table: bookings, already exist');
        } else {
          console.log('Table: bookings, created')
        }
      })
    //Setup ends here
  }
});


module.exports = db