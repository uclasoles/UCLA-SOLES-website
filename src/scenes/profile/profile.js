import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { SmallMasthead } from '../../components/navigation/navigation';
import '../../custom.css';
import ChangePasswordForm from './changePassword';

class ProfilePage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/' />
    
    return (
      <div>
        <SmallMasthead />
        <h1>My Account</h1>
        <Tabs defaultActiveKey="password_reset" transition={false} id='uncontrolled-tab-example'>
          <Tab eventKey="password_reset" title="Password Reset">
            <ChangePasswordForm />
          </Tab>
          <Tab eventKey="my_tests" title="My Tests">
            <h2>My Tests</h2>
          </Tab>
          <Tab eventKey="my_features" title="My Features">
            <h2>My Features</h2>
          </Tab>
        </Tabs>
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

export default connect(mapStateToProps)(ProfilePage)