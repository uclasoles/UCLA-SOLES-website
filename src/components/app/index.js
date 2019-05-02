import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation';
import AboutPage from '../about';
import SignUpPage from '../signup';
import SignInPage from '../signin';
import PasswordForgetPage from '../passwordforget';
import ProfilePage from '../profile';
import AdminPage from '../admin';
import CompaniesPage from '../companies';
import StudentsPage from '../students';
import TestBankPage from '../testbank';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.COMPANIES} component={CompaniesPage}/>
      <Route path={ROUTES.STUDENTS} component={StudentsPage}/>
      <Route path={ROUTES.TESTBANK} component={TestBankPage}/>
    </div>
  </Router>
);

export default withAuthentication(App);
