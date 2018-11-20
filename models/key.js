// Mongoose
const mongoose = require('mongoose');
const port = 27017;
const url = `mongodb://localhost:${port}/final-project`;

// Mongoose 
mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected on port ${port}...`))
    .catch(err => console.log(err));

module.exports = {
    mongoURI: 'mongodb://<dbuser>:<dbpassword>@ds029267.mlab.com:29267/final-project'
    secretOrKey: 'superdupersecret'
};

