const express = require('express');
require('./services/passport');
const app = express();
require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port);
