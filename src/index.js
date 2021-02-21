import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import route from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>{route()}</Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
