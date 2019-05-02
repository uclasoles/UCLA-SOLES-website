import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
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
                      <h3 className="card-header-text">Sign-Up</h3>
                    </div>
                    <div className="card-body">
                      
                      <SignUpForm />
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

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
	 super(props);

	 this.state = {...INITIAL_STATE}
  }

  onSubmit = event => {
	 const { firstname, lastname, email, passwordOne } = this.state;
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // Create a user in your Firebase realtime database
      return this.props.firebase
        .user(authUser.user.uid)
        .set({
          firstname,
          lastname,
          email,
          roles: {member: 'true'},
        });
    })
    .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ABOUT);
      }).catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }

  onChange = event => {
	 this.setState({ [event.target.name]: event.target.value });
  };

  render() {
	 const {
	   firstname,
     lastname,
	   email,
	   passwordOne,
	   passwordTwo,
	   error,
	 } = this.state;

   const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || firstname === '' || lastname === '';
	
	 return (
		<form onSubmit={this.onSubmit}>
		<input
      name="firstname"
      value={firstname}
      onChange={this.onChange}
      type="text"
      placeholder="First Name"
    />
    <br></br>
    <input
      name="lastname"
      value={lastname}
      onChange={this.onChange}
      type="text"
      placeholder="Last Name"
    />
    <br></br>
    <input
      name="email"
      value={email}
      onChange={this.onChange}
      type="text"
      placeholder="Email Address"
    />
    <br></br>
    <input
      name="passwordOne"
      value={passwordOne}
      onChange={this.onChange}
      type="password"
      placeholder="Password"
    />
    <br></br>
    <input
      name="passwordTwo"
      value={passwordTwo}
      onChange={this.onChange}
      type="password"
      placeholder="Confirm Password"
    />
    <button disabled={isInvalid} type="submit">Sign Up</button>

    {error && <p>{error.message}</p>}
    </form>
	 );
  }
}

const SignUpLink = () => (
  <p>
    Don&#8217;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
