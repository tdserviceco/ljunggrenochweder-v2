const express = require('express');
const cors = require('cors');
const app = express();
const port = 5100;
const router = express.Router();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));
app.use(cookieParser())
app.use('/api/v1', router)
// Routes

// Auth
const auth = require('./routes/auth');

// Login
const login = require('./routes/login');

// Logout
const logout = require('./routes/logout');

// Get
const getUsers = require('./routes/getUsers');

const xml = require('./routes/xml');

// Post
const postNewUser = require('./routes/postNewUser');

// Put

// Delete
const deleteUser = require('./routes/deleteUser');


router.get('/auth', auth)
router.get('/users', getUsers);

router.get('/xml', xml);

router.post('/login', login);
router.post('/logout', logout);
router.post('/users', postNewUser);

router.delete('/users/:id', deleteUser);

// Default response for any other request
app.use((req, res) => {
  res.status(404);
});


app.listen(port, () => {
  console.log("Server running on port http://localhost:%PORT%".replace("%PORT%", port))
})