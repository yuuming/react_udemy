const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`running on ${port}`);
});
