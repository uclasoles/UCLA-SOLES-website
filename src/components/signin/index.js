import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../signup';
import { PasswordForgetLink } from '../passwordforget';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

// signinpage component that displays on signinpage
const SignInPage = () => (
	
	
	<div>
		<header className="masthead">
			<div className="container">
				<div className="intro-text">
					<div className="intro-lead-in">Society of Latino Engineers and Scientists</div>
					<div className="intro-heading text-uppercase">SOLES at UCLA</div>
					<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#whatwedo">Learn More</a>
				</div>
			</div>
		</header>

    <h1>Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
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


