const express = require('express');
const cors = require('cors');
const app = express();
const port = 5100;
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/v1', router)

// Routes

// Get
const getUser = require('./routes/getUsers');
const getUserByID = require('./routes/getUserByID')
const getUsersByRole = require('./routes/getUsersByRole')

// Post
const postNewUser = require('./routes/postNewUser');

// Put

// Delete
const deleteUser = require('./routes/deleteUser');


router.get('/users', getUser);
router.get('/user/:id', getUserByID);
router.get('/users/role/:role', getUsersByRole)

router.post('/users', postNewUser)

router.delete('/user/:id', deleteUser)

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})