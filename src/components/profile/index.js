import React, {Component} from 'react';
import { SmallMasthead } from '../navigation/navigation'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PasswordChangeForm from '../passwordchange';
import '../../custom.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
            <PasswordChangeForm />
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