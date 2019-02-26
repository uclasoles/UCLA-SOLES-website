import React from 'react';

import { AuthUserContext , withAuthorization} from '../session';
import PasswordChangeForm from '../passwordchange';

const ProfilePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Profile: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ProfilePage);