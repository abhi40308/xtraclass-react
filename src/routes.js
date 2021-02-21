import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from 'views/Index.js';
import Landing from 'views/examples/Landing.js';
import CoursesLanding from './components/Courses/Landing';
import Login from 'views/examples/Login.js';
import Profile from 'views/examples/Profile.js';
import Register from 'views/examples/Register.js';

const routes = () => {
  return (
    <>
      <Route path='/' exact render={(props) => <Index {...props} />} />
      <Route
        path='/courses-landing-page'
        exact
        render={(props) => <CoursesLanding {...props} />}
      />
      <Route
        path='/login-page'
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path='/profile-page'
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path='/register-page'
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to='/' />
    </>
  );
};

export default routes;
