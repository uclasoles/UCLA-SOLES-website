import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

// bootstrap and css components
import '../../custom.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// TODO
// * Add validation to form fields on submission
// * Look into better way to provide user feedback from Firebase calls

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  career: 'UGRAD',
  major: '',
  year: '',
  grad_year: '',
  company: '',
  error: null,
};

class SignUpPageBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
    this.displayMajors = this.displayMajors.bind(this);

    this.thisYear = (new Date()).getFullYear();
  }

  onSubmit = event => {
	 const { firstname, lastname, email, passwordOne, major, career, year, grad_year, company} = this.state;
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
        grad_year,
        company,
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
      this.displayMajors(this.props.firebase.majors_cached);
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
     grad_year,
     company,
	   error,
	 } = this.state;

   const isStudent = career === 'UGRAD' || career === 'GRAD';

   const isAlumni = career === 'ALUM';

   const isIndustry = career === 'ALUM' || career === 'IND';

   const isInvalid = passwordOne !== passwordTwo 
                    || passwordOne === '' 
                    || email === '' 
                    || firstname === '' 
                    || lastname === ''
                    || (isStudent && (major === '' || year === ''))
                    || (isAlumni && grad_year === '')
                    || (isIndustry && company === '');

    // create the year dropdown menu
    const options = [];
    for (let i = 0; i <= 70; i++) {
      const year = this.thisYear - i;
      options.push(<option key={year.toString()} value={year}>{year}</option>);
    }

  	 return (
      <div id="centered-masthead">
        <div className="row h-100 justify-content-center align-items-center">
          <Card style={{ width:'25rem' }}>
            <Card.Header as="h3" style={{ color: 'black' }}>Sign Up</Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>

                <Form.Group controlId="formSignUpEmail">
                  <Form.Control name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formSignUpFirstName">
                    <Form.Control name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder="First Name"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSignUpLastName">
                    <Form.Control name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder="Last Name"/>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formSignUpPassOne">
                  <Form.Control name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password"/>
                </Form.Group>

                <Form.Group controlId="formSignUpPassTwo">
                  <Form.Control name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password"/>
                </Form.Group>

                <Form.Group controlId="formSignUpCareer">
                  <ButtonGroup aria-label="Career">
                    <Button name="career" value="UGRAD" variant="secondary" size="sm" disabled={this.state.career === "UGRAD"} onClick={this.onChange} type="button">Undergraduate</Button>
                    <Button name="career" value="GRAD" variant="secondary" size="sm" disabled={this.state.career === "GRAD"} onClick={this.onChange} type="button">Graduate</Button>
                    <Button name="career" value="ALUM" variant="secondary" size="sm" disabled={this.state.career === "ALUM"} onClick={this.onChange} type="button">Alumni</Button>
                    <Button name="career" value="IND" variant="secondary" size="sm" disabled={this.state.career === "IND"} onClick={this.onChange} type="button">Industry</Button>
                  </ButtonGroup>
                </Form.Group>

                <Form.Group className={isStudent ? "" : "hidden"}>
                  <Form.Control as="select" id="major" name="major" onChange={this.onChange} value={major}>
                    <option value="" disabled>Please select major...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className={isStudent ? "" : "hidden"}>
                  <Form.Control as="select" id="year" name="year" onChange={this.onChange} value={year}>
                    <option value="" disabled>Please select a year...</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                    <option value="5">Fifth Year</option>
                    <option value="6">Sixth Year</option>
                    <option value="7">Seventh Year</option>
                    <option value="8">Eighth Year+</option>
                  </Form.Control>                
                </Form.Group>

                <Form.Group className={isAlumni ? "" : "hidden"}>
                  <Form.Control as="select" id="grad_year" name="grad_year" onChange={this.onChange} value={grad_year}>
                    <option value="" disabled>Please select a graduation year...</option>
                    {options}
                  </Form.Control>                
                </Form.Group>

                <Form.Group className={isIndustry ? "" : "hidden"}>
                  <Form.Control name="company" value={company} onChange={this.onChange} type="text" placeholder="Current Employer"/>     
                </Form.Group>

                {error && <Card.Text style={{ color: 'red', fontSize:'small'}}>{error.message}</Card.Text>}
                <Button disabled={isInvalid} type="submit" variant='primary' block>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
	  );
  }
}

const SignUpPage = compose(
  withRouter,
  withFirebase,
)(SignUpPageBase);

export default SignUpPage;
