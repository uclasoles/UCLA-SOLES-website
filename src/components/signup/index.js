import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
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

	 <h1>SignUp</h1>
   <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  career: 'UGRAD',
  major: '',
  year: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
   super(props);

   this.state = {...INITIAL_STATE};
   this.displayMajors = this.displayMajors.bind(this);
  }

  onSubmit = event => {
	 const { firstname, lastname, email, passwordOne, major, career, year} = this.state;
   this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      // add new user to firestore
      return this.props.firebase.db.doc(`users/${authUser.user.uid}`).set({
        firstname,
        lastname,
        email,
        major,
        career,
        year,
        roles: {member: true},
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

  componentDidMount() {
    // if we haven't already requested the major data from firebase
    if (this.props.firebase.majors_cached === null) {
      var majors = []
      this.props.firebase.majors().get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          majors.push(doc.data());
        });
        console.log(`[INFO] Received ${majors.length} major documents from FireStore for sign up form.`);
        // updates the cached version and displays the majors
        this.props.firebase.majors_cached = majors;
        this.displayMajors(majors);
      }.bind(this))
    } else {
      this.displayMajors(majors);
    }
  }

  // adds majors to the dropdown menu
  displayMajors(majors) {
    var dropdown = document.getElementById("major");
    for (var i = 0; i < majors.length; i++) {
      var new_item = document.createElement("option");
      new_item.innerHTML = majors[i].name;
      new_item.value = majors[i].abbr;
      dropdown.appendChild(new_item);
    }
  }

  render() {
	 const {
	   firstname,
     lastname,
	   email,
	   passwordOne,
	   passwordTwo,
     major,
     career,
     year,
	   error,
	 } = this.state;

   const isStudent = career === 'UGRAD' || career === 'GRAD';

   const isInvalid = passwordOne !== passwordTwo 
                    || passwordOne === '' 
                    || email === '' 
                    || firstname === '' 
                    || lastname === ''
                    || (isStudent && (major === '' || year === ''));

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
      placeholder="Email"
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
    <br></br>
    <input name="career" value="UGRAD" checked={this.state.career === "UGRAD"} onChange={this.onChange} type="radio"/><label htmlFor="UGRAD">Undergraduate</label>
    <input name="career" value="GRAD" checked={this.state.career === "GRAD"} onChange={this.onChange} type="radio"/><label htmlFor="GRAD">Graduate</label>
    <input name="career" value="ALUM" checked={this.state.career === "ALUM"} onChange={this.onChange} type="radio"/><label htmlFor="ALUM">Alumni</label>
    <input name="career" value="IND" checked={this.state.career === "IND"} onChange={this.onChange} type="radio"/><label htmlFor="IND">Industry</label>
    <br></br>
    <div className={isStudent ? "" : "hidden"}>
      <select id="major" name="major" onChange={this.onChange} value={major}>
        <option value="" disabled>Please select major...</option>
      </select>
      <br></br>
      <select id="year" name="year" onChange={this.onChange} value={year}>
        <option value="" disabled>Please select a year...</option>
        <option value="1">First Year</option>
        <option value="2">Second Year</option>
        <option value="3">Third Year</option>
        <option value="4">Fourth Year</option>
        <option value="5">Fifth Year</option>
        <option value="6">Sixth Year</option>
        <option value="7">Seventh Year</option>
        <option value="8">Eighth Year+</option>
      </select>
      <br></br>
    </div>
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
