import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../custom.css';
import '../../fontawesome.js';
import { resetPassword } from '../../store/actions/authActions';

class PasswordForgetPage extends Component {
  state = {
    email: ''
  }

  constructor(props) {
    super(props);
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.resetPassword(this.state.email)
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const { email } = this.state
    const { authError } = this.props

    const isInvalid = email === '';
    if (authError === 'success') return <Redirect to={ROUTES.SIGN_IN}> </Redirect>

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
                {authError && <Card.Text style={{ color: 'red', fontSize:'small'}}>{authError.message}</Card.Text>}
                <Button disabled={isInvalid} type="submit" variant='primary' block>Reset</Button>
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
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgetPage)

