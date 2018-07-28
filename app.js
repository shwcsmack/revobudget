const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect('mongodb://localhost:27017/RevBudget')
require('./models/user');
require('./services/passport');

//use authRoutes with created app object
require('./routes/authRoutes')(app);

app.listen(PORT);