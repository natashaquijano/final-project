const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/api/users');

// Init Express App
const app = express();

// Express CORS Middleware
app.use(cors());

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/key').mongoURI;

// Connect To MongoDB Using Mlab
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected`))
    .catch(err => console.log(err));

// Set Static File or Test Route . Welcome Route for the Index
app.get('/', (req, res) => {
    res.send('Hello Back-End World!');
});

// Defining Passport
const passport = require('passport');

// Passport Middleware
app.use(passport.initialize());
// Passport JWT Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

// Running Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));