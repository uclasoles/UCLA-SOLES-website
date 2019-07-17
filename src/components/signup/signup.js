import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../custom.css';
import '../../fontawesome.js';
import { anyBlank } from '../../services/arrayFunctions';
import { signUp } from '../../store/actions/authActions';
import { fetchMajors } from '../../store/actions/majorActions';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    career: 'UGRAD',
    major: '',
    year: '',
    gradYear: '',
    company: '',
  }

  constructor(props) {
    super(props);
    this.thisYear = (new Date()).getFullYear();
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  }

  componentWillMount() {
    this.props.fetchMajors();
  }

  render() {
    const { auth, authError, majors} = this.props
    const { firstName, lastName, email, passwordOne, passwordTwo, major, career, year, gradYear, company} = this.state
    if (auth.uid) return <Redirect to='/' />

    const isAlumni = career === 'ALUM'
    const isIndustry = isAlumni || career === 'IND'
    const isStudent = !isIndustry

    const mismatchedPasswords = passwordOne !== passwordTwo
    const isInvalid =  mismatchedPasswords || 
      anyBlank([passwordOne, email, firstName, lastName]) ||
      (isStudent && anyBlank([major, year])) ||
      (isAlumni && anyBlank([gradYear])) ||
      (isIndustry && anyBlank([company]))

    // Creating year drop down menu
    const years = [];
    for (let i = 0; i <= 70; i++) {
      years.push(this.thisYear - i);
    }

    return (
      <div id="centered-masthead">
        <div className="row h-100 justify-content-center align-items-center">
          <Card style={{ width:'25rem' }}>
            <Card.Header as="h3" style={{ color: 'black', textAlign: 'left' }}>
              <LinkContainer to={ROUTES.SIGN_IN}><FontAwesomeIcon icon={['fas', 'chevron-left']} size='xs' className="card-heading-icon"/></LinkContainer>
              Sign Up
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formSignUpEmail">
                  <Form.Control name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/>
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formSignUpFirstName">
                    <Form.Control name="firstName" value={firstName} onChange={this.onChange} type="text" placeholder="First Name"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSignUpLastName">
                    <Form.Control name="lastName" value={lastName} onChange={this.onChange} type="text" placeholder="Last Name"/>
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
                    <Button name="career" value="UGRAD" variant="secondary" size="sm" disabled={career === "UGRAD"} onClick={this.onChange} type="button">Undergraduate</Button>
                    <Button name="career" value="GRAD" variant="secondary" size="sm" disabled={career === "GRAD"} onClick={this.onChange} type="button">Graduate</Button>
                    <Button name="career" value="ALUM" variant="secondary" size="sm" disabled={career === "ALUM"} onClick={this.onChange} type="button">Alumni</Button>
                    <Button name="career" value="IND" variant="secondary" size="sm" disabled={career === "IND"} onClick={this.onChange} type="button">Industry</Button>
                  </ButtonGroup>
                </Form.Group>

                <Form.Group className={isStudent ? "" : "hidden"}>
                  <Form.Control as="select" id="major" name="major" onChange={this.onChange} value={major}>
                    <option value="" disabled>Please select major...</option>
                    { majors && majors.map(major => {return (<option key={major} value={major}>{major}</option>)})}
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
                  <Form.Control as="select" id="gradYear" name="gradYear" onChange={this.onChange} value={gradYear}>
                    <option value="" disabled>Please select a graduation year...</option>
                    {years.map((year) => {return(<option key={year.toString()} value={year}>{year}</option>)})}
                  </Form.Control>                
                </Form.Group>

                <Form.Group className={isIndustry ? "" : "hidden"}>
                  <Form.Control name="company" value={company} onChange={this.onChange} type="text" placeholder="Current Employer"/>     
                </Form.Group>

                {authError && <Card.Text style={{ color: 'red', fontSize:'small'}}>{authError.message}</Card.Text>}
                <Button disabled={isInvalid} type="submit" variant='primary' block>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    majors: state.majors.majors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
    fetchMajors: () => dispatch(fetchMajors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
