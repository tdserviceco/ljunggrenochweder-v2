-- -- SQLite
-- CREATE TABLE IF NOT EXISTS customers (
-- 	id INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	first_name TEXT NOT NULL,
-- 	last_name TEXT NOT NULL,
-- 	password TEXT NOT NULL,
-- 	email TEXT NOT NULL UNIQUE,
-- 	phone TEXT NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS schedule (
-- 	id INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	staff_id INTEGER,
-- 	schedule TEXT
-- );

-- CREATE TABLE IF NOT EXISTS services (
-- 	id INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	staff_id INTEGER,
-- 	service_name TEXT
-- );

-- CREATE TABLE IF NOT EXISTS bookings (
-- 	id INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	staff_id INTEGER,
-- 	customer_id INTEGER
-- );