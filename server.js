const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const products = require('./routes/api/products');
const stripe = require('stripe')('sk_test_G9Y1yOVZNb5dKj5aETTcTO31');
const exphbs = require('express-handlebars');

// Init Express App
const app = express();

// Express CORS Middleware
app.use(cors());

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
let db
if (process.env.MONGODB_URI) {
    db = process.env.MONGODB_URI
} else {
    db = require('./config/key').mongoURI;
}

// Connect To MongoDB Using Mlab
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected`))
    .catch(err => console.log(err));

// Set Static File or Test Route . Welcome Route for the Index
app.get('/', (req, res) => {
    res.send('Hello Back-End World!');
    // res.render('client/index')
});

// app.get('/', (req, res) => {
//     res.render('index');
// });

// Defining Passport
const passport = require('passport');

// Passport Middleware
app.use(passport.initialize());
// Passport JWT Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/products', products);

// Running Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));