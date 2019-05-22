import React, { Component } from 'react';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../session';
import { withFirebase } from '../firebase';

// bootstrap and css components
import '../../custom.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// allows react router and bootstrap to play nicely
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuthBase extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
  }

  componentDidMount () {      
    window.onscroll =()=>{
      this.setState({opacity: Math.min(document.documentElement.scrollTop / 80.0, 1.0)}, function () {
        this.forceUpdate();
      });
    }
  }

  render () {
    return (
      <Navbar expand="lg" fixed="top" style={{backgroundColor: `rgba(52, 58, 64, ${this.state.opacity})`}}>
        <LinkContainer to={ROUTES.ABOUT}><Navbar.Brand><img src='https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,h_75,q_100,w_80/soles-sun.png' alt = "Soles Sun"/></Navbar.Brand></LinkContainer>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <LinkContainer className="navbar-item" to={ROUTES.ABOUT}><Nav.Link>ABOUT</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.STUDENTS}><Nav.Link>STUDENTS</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.COMPANIES}><Nav.Link>COMPANIES</Nav.Link></LinkContainer>

          <NavDropdown title={<div className="navbar-item" style={{display: "inline-block"}}>MEMBER SERVICES</div>}>
            <LinkContainer to={ROUTES.PROFILE}><NavDropdown.Item><FontAwesomeIcon icon={['fas', 'user-circle']} className="dropdown-icon"/>Profile</NavDropdown.Item></LinkContainer>
            <LinkContainer to={ROUTES.TESTBANK}><NavDropdown.Item><FontAwesomeIcon icon={['fas', 'copy']} className="dropdown-icon"/>Test Bank</NavDropdown.Item></LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={this.props.firebase.doSignOut}><FontAwesomeIcon icon={['fas', 'sign-out-alt']} className="dropdown-icon"/>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  } 
}

class NavigationNonAuthBase extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
  }

  componentDidMount () {      
    window.onscroll =()=>{
      this.setState({opacity: Math.min(document.documentElement.scrollTop / 80.0, 1.0)}, function () {
        this.forceUpdate();
      });
    }
  }
  
  render () {
    return (
      <Navbar expand="lg" fixed="top" style={{backgroundColor: `rgba(52, 58, 64, ${this.state.opacity})`}}>
        <LinkContainer to={ROUTES.ABOUT}><Navbar.Brand><img src='https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,h_75,q_100,w_80/soles-sun.png' alt = "Soles Sun"/></Navbar.Brand></LinkContainer>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <LinkContainer className="navbar-item" to={ROUTES.ABOUT}><Nav.Link>ABOUT</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.STUDENTS}><Nav.Link>STUDENTS</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.COMPANIES}><Nav.Link>COMPANIES</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.SIGN_IN}><Nav.Link>SIGN IN</Nav.Link></LinkContainer>
        </Nav>
      </Navbar>
    )
  } 
}

const NavigationAuth = compose(
  withFirebase,
) (NavigationAuthBase);

const NavigationNonAuth = compose(
  withFirebase,
) (NavigationNonAuthBase);

class SmallMasthead extends Component {
  render () {
    return (
      <header className="masthead">
        <br></br>
        <Container className="py-5"> </Container>
      </header>
    );
  }
}

export default withFirebase(Navigation);

export { SmallMasthead };
