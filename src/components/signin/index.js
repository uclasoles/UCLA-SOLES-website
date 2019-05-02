import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './agency.css';

import { SignUpLink } from '../signup';
import { PasswordForgetLink } from '../passwordforget';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

// signinpage component that displays on signinpage
const SignInPage = () => (
	<div>
		<header className="masthead">
			<br></br><br></br><br></br>
			<div className="card-container">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-6 mx-auto">
									<div className="card rounded-5">
										<div className="card-header">
											<h3 className="card-header-text">Login</h3>
										</div>
										<div className="card-body">
											<SignInForm />
											<PasswordForgetLink />
	    									<SignUpLink />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br><br></br><br></br>
		</header>
	</div>
);

// the intial state of the submit form
const INITIAL_STATE = {
	email: '',
	password: '',
	error: null,
};

// the base form without firebase api
class SignInFormBase extends Component {
	constructor (props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	// attempt to sign in
	onSubmit = event => {
    	const { email, password } = this.state;

    	this.props.firebase
      	.doSignInWithEmailAndPassword(email, password)
      	.then(() => {
        	this.setState({ ...INITIAL_STATE });
        	this.props.history.push(ROUTES.ABOUT);
      	})
      	.catch(error => {
        	this.setState({ error });
      	});
      	// prevents automatic reloading of the page
    	event.preventDefault();
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
	    const { email, password, error } = this.state;

	    const isInvalid = password === '' || email === '';

	    return (
	      <form onSubmit={this.onSubmit}>
	        <input
	          name="email"
	          value={email}
	          onChange={this.onChange}
	          type="text"
	          placeholder="Email Address"
	        />
	        <input
	          name="password"
	          value={password}
	          onChange={this.onChange}
	          type="password"
	          placeholder="Password"
	        />
	        <button disabled={isInvalid} type="submit">
	          Sign In
	        </button>

	        {error && <p>{error.message}</p>}
	      </form>
	    );
	}
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };