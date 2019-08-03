import React, { Component } from 'react'
import { changePassword } from '../../store/actions/authActions'
import { connect } from 'react-redux'

class ChangePasswordForm extends Component {
  state = {
    passwordOne: '',
    passwordTwo: '',
    error: null
  }

  constructor(props) {
    super(props);
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.changePassword(this.state.passwordOne)
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
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
    changePassword: (creds) => dispatch(changePassword(creds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm)
