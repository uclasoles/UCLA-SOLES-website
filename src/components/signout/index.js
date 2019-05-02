import React from 'react';

import { withFirebase } from '../firebase';

const SignOutButton = ({ firebase }) => (
  <button onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);

