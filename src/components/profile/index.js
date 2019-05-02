import React, {Component} from 'react';

import { AuthUserContext , withAuthorization} from '../session';
import PasswordChangeForm from '../passwordchange';
import '../navigation/agency.css';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';

const ProfilePage = () => (
  <AuthUserContext.Consumer>
		    {authUser => (
		    	<div>
		    		<header className="masthead">
							<br></br><br></br><br></br>
							<div className="container py-5">
							</div>
						</header>
		        <h1>My Account</h1>
		        <MyAccountForm />
		        <PasswordChangeForm />
		      </div>
		    )}
  </AuthUserContext.Consumer>
);

const INITIAL_STATE = {
	email: '',
	firstname: '',
	grad_year: '', // specific to alumni
	lastname: '',
	major: '',
	roles: null,
	test_bank_days: 0,
	year: '',
	error: null,
};

class MyAccountFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};


  }

  render() {
  	return (
  		<h1>My Account</h1>
  	);
  }
}

const MyAccountForm = compose(
  withFirebase,
)(MyAccountFormBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ProfilePage);

export { MyAccountForm };