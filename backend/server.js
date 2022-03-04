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
app.use(cors({
  credentials: true
}));
app.use('/api/v1', router)

// Routes

// Auth
const auth = require('./routes/auth');

// Get
const getCustomers = require('./routes/getCustomers');
const getStaffs = require('./routes/getStaffs');


const xml = require('./routes/xml');

// Post
const postNewCustomer = require('./routes/postNewCustomer');

// Put

// Delete
const deleteCustomer = require('./routes/deleteCustomer');


router.get('/customer', getCustomers);
router.get('/staff', getStaffs);

router.get('/xml', xml);

router.post('/auth/:role', auth);
router.post('/customer', postNewCustomer);

router.delete('/customer/:id', deleteCustomer);

// Default response for any other request
app.use((req, res) => {
  res.status(404);
});


app.listen(port, () => {
  console.log("Server running on port http://localhost:%PORT%".replace("%PORT%", port))
})