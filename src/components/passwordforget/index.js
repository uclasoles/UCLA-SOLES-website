import React, { Component } from 'react';

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

// css and bootstrap imports
import '../../custom.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// allows react router and bootstrap to play nicely
import { LinkContainer } from 'react-router-bootstrap';

// TODO
// * Add validation to form fields on submission
// * Look into better way to provide user feedback from Firebase calls

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetPageBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <div id="centered-masthead">
        <div className="row h-100 justify-content-center align-items-center">
          <Card style={{ width:'25rem' }}>
            <Card.Header as="h3" style={{ color: 'black', textAlign: 'left'}}>
              <LinkContainer to={ROUTES.SIGN_IN}><FontAwesomeIcon icon={['fas', 'chevron-left']} size='xs' className="card-heading-icon-reset"/></LinkContainer>
              Password Reset
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formResetPassword">
                  <Form.Control name="email" value={email} onChange={this.onChange} type="email" placeholder="Email"/>
                </Form.Group>
                {error && <Card.Text style={{ color: 'red', fontSize:'small'}}>{error.message}</Card.Text>}
                <Button disabled={isInvalid} type="submit" variant='primary' block>Reset</Button>
              </Form> 
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

const PasswordForgetPage = withFirebase(PasswordForgetPageBase)

export default PasswordForgetPage;

