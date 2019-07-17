import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../../constants/routes';
import '../../custom.css';
import '../../fontawesome.js';
import AuthLinks from './authLinks';
import NonAuthLinks from './nonAuthLinks';

class Navigation extends Component {
  constructor (props) {
    super(props)
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
    const { auth } = this.props
    return (
      <Navbar expand="lg" fixed="top" style={{backgroundColor: `rgba(52, 58, 64, ${this.state.opacity})`}}>
        <LinkContainer to={ROUTES.ABOUT}><Navbar.Brand><img src='https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,h_75,q_100,w_80/soles-sun.png' alt = "Soles Sun"/></Navbar.Brand></LinkContainer>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <LinkContainer className="navbar-item" to={ROUTES.ABOUT}><Nav.Link>ABOUT</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.STUDENTS}><Nav.Link>STUDENTS</Nav.Link></LinkContainer>
          <LinkContainer className="navbar-item" to={ROUTES.COMPANIES}><Nav.Link>COMPANIES</Nav.Link></LinkContainer>

          {auth.uid ? <AuthLinks /> : <NonAuthLinks />}
        </Nav>
      </Navbar>
    )
  }
}

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

const mapStateToProps = ( state ) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navigation);

export { SmallMasthead };

