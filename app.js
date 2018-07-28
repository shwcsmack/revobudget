const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/RevBudget')
require('./models/user');
require('./services/passport');

//use authRoutes with created app object
require('./routes/authRoutes')(app);

app.listen(PORT);