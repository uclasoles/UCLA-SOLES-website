import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';
import '../../custom.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

	constructor (props) {
		super(props);
	}

	onSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state);
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
    const { auth, authError } = this.props
    const { email, password } = this.state;
    if (auth.uid) return <Redirect to='/' />

    const isInvalid = password === '' || email === '';

    return (
      <div id="centered-masthead">
				<div className="row h-100 justify-content-center align-items-center">
					<Card style={{ width:'20rem' }}>
            <Card.Header as="h3" style={{ color: 'black' }}>Sign In</Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formSignInEmail">
                  <Form.Control name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/>
                </Form.Group>
                <Form.Group controlId="formSignInPassword">
                  <Form.Control name="password" value={password} onChange={this.onChange} type="password" placeholder="Password"/>
                </Form.Group>
                {authError && <Card.Text style={{ color: 'red', fontSize:'small'}}>{authError.message}</Card.Text>}
                <Button disabled={isInvalid} type="submit" variant='primary' block>Sign In</Button>
              </Form>
              <p><Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link></p>
              <p style={{color:"black"}}>Don&#8217;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
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
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)