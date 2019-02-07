import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import pic from './vangoh.jpg';

import Navigation from '../navigation';
import LandingPage from '../landing';
import SignUpPage from '../signup';
import SignInPage from '../signin';
import PasswordForgetPage from '../passwordforget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <img alt="van goh" src={pic} width="500" height ="500"/>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
