passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
      }
    )
  );