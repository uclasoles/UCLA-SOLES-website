import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../navigation';
import AboutPage from '../about';
import SignUpPage from '../signup';
import SignInPage from '../signin';
import PasswordForgetPage from '../passwordforget';
import AccountPage from '../account';
import AdminPage from '../admin';
import CompaniesPage from '../companies';
import StudentsPage from '../students';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount () {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render () {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route exact path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.COMPANIES} component={CompaniesPage}/>
          <Route path={ROUTES.STUDENTS} component={StudentsPage}/>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
