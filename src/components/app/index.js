import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

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
import Footer from '../footer';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.ABOUT} component={AboutPage}/>
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
        <Route exact path={ROUTES.PROFILE} component={ProfilePage}/>
        <Route exact path={ROUTES.ADMIN} component={AdminPage}/>
        <Route exact path={ROUTES.COMPANIES} component={CompaniesPage}/>
        <Route exact path={ROUTES.STUDENTS} component={StudentsPage}/>
        <Route exact path={ROUTES.TESTBANK} component={TestBankPage}/>
        <Redirect to={ROUTES.ABOUT}/>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
