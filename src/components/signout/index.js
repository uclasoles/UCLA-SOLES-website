import React from 'react';

import { withFirebase } from '../firebase';

const SignOutButton = ({ firebase }) => (
  <a onClick={firebase.doSignOut}>
    Sign Out
  </a>
);

export default withFirebase(SignOutButton);

