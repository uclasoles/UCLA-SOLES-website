import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';

const NonAuthLinks = () => {
  return (
    <LinkContainer className="navbar-item" to={ROUTES.SIGN_IN}><Nav.Link>SIGN IN</Nav.Link></LinkContainer>
  )
}

export default NonAuthLinks