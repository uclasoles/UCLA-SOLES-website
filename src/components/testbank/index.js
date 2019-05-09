import React, { Component } from 'react';
import Test from "../../components/test"

import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

function TestBankPage(props) {
  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          {props.tests.map(t => 
            <Test key={t.id} professor={t.professor} year={t.year} quarter={t.quarter} type={t.type} />
          )}
      </div> 
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = authUser => !!authUser;

//export default withAuthorization(condition)(TestBankPage);
export default TestBankPage;