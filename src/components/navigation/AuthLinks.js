import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../constants/routes'
import { signOut } from '../../store/actions/authActions'

const AuthLinks = (props) => {
  return (
    <NavDropdown title={<div className="navbar-item" style={{display: "inline-block"}}>MEMBER SERVICES</div>}>
      <LinkContainer to={ROUTES.PROFILE}><NavDropdown.Item><FontAwesomeIcon icon={['fas', 'user-circle']} className="dropdown-icon"/>Profile</NavDropdown.Item></LinkContainer>
      <LinkContainer to={ROUTES.TEST_BANK}><NavDropdown.Item><FontAwesomeIcon icon={['fas', 'copy']} className="dropdown-icon"/>Test Bank</NavDropdown.Item></LinkContainer>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={props.signOut}><FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="dropdown-icon"/>Sign Out</NavDropdown.Item>
    </NavDropdown>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(AuthLinks)