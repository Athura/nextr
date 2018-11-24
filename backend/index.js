const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/user-routes');
const profile = require('./routes/profile-routes');
const house = require('./routes/house-routes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to the mongo database
mongoose
    .connect(db)
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch((err) => {
        console.log(err);
    });

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/house', house);

app.get('/', (req, res) => {
    res.send('Hello!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});