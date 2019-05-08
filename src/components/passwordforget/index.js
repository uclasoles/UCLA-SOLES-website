import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
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
                      <h3 className="card-header-text">I forgot my password...</h3>
                    </div>
                    <div className="card-body">
                      
                      <PasswordForgetForm />
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
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
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
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
