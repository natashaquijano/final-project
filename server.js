const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express
const app = express();

// Express CORS Middleware
app.use(cors());

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Set Static File
app.get('/', (req, res) => {
    res.send('Hello Back-End World!');
});


// API Endpoints


// Running Sercer
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));