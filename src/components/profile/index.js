import React from 'react';

import { PasswordForgetForm } from '../passwordforget';
import PasswordChangeForm from '../passwordchange';

const ProfilePage = () => (
  <div>
    <h1>Profile Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default ProfilePage;