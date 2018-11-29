const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
    cookieSession({ // I want to cookie to last before it disappear 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [key.cookieKey]

    })
);
require('./routes/authRoutes')(app); 

const port = process.env.PORT || 5000;
app.listen(port);
