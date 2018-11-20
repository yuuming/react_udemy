const express = require('express'); // import express library
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientID,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken);
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);