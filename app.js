require('./services/passport');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000

//use authRoutes with created app object
require('./routes/authRoutes')(app);

app.listen(PORT);