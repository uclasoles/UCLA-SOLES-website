import React, {Component} from 'react';

import { SmallMasthead } from '../navigation'
import { AuthUserContext , withAuthorization} from '../session';
import PasswordChangeForm from '../passwordchange';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';

import '../../custom.css';

// react bootstrap components
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProfilePage = () => (
  <AuthUserContext.Consumer>
		    {authUser => (
		    	<div>
		    		<SmallMasthead />
		    		<h1>My Account</h1>
		        <MyAccountForm />
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
			<div>
				<Tabs defaultActiveKey="password_reset" transition={false} id='uncontrolled-tab-example'>
					<Tab eventKey="password_reset" title="Password Reset">
						<PasswordChangeForm />
					</Tab>
					<Tab eventKey="my_tests" title="My Tests">
						<h2>My Tests</h2>
					</Tab>
					<Tab eventKey="my_features" title="My Features">
						<h2>My Features</h2>
					</Tab>
				</Tabs>
			</div>
  	);
  }
}

const MyAccountForm = compose(
  withFirebase,
)(MyAccountFormBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ProfilePage);

export { MyAccountForm };