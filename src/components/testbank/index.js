import React, { Component } from 'react';

import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

const TestBankPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Test Bank</h1>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TestBankPage);
