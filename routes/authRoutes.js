import { authenticate } from 'passport';
export default app => {
    app.get(
        '/auth/google',
        authenticate('google', {
          scope: ['profile', 'email']
        })
      );
      app.get('/auth/google/callback', authenticate('google'));   
};

