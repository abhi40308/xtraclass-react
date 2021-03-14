import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';
import CoursesLanding from 'views/courses/Landing.js';
import Container from 'views/courses/detail/Container.js';
import Landing from 'views/Landing.js';
import Profile from 'views/Profile.js';
import Index from 'views/Index.js';
import { firebaseAuth } from 'providers/AuthProvider';

function App(props) {
  // const { token } = useContext(firebaseAuth);
  // console.log(token);
  return (
    <>
      <Switch>
        <Route path='/courses' exact component={CoursesLanding} />
        <Route path='/courses/detail/:id' component={Container} />
        <Route path='/admin' component={Admin} />
        <Route path='/auth' component={Auth} />
        <Route path='/landing' exact component={Landing} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/' exact component={Index} />
        {/* <Redirect from='*' to='/' /> */}
      </Switch>

      {/* <Switch>
        <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
      </Switch> */}
    </>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);
