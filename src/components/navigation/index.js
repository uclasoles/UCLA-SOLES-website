import React from 'react';
import { Link } from 'react-router-dom';
import solessun from './soles-sun.png';
import './agency.css';

import SignOutButton from '../signout'; 
import { TestBankButton } from '../testbank';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={solessun} alt = "Soles Sun" style={{height: '75px'}} /></a>

      <div className="dropdown">
          <Link to={ROUTES.STUDENTS}><button className="dropbtn">Students</button></Link>
          <div className="dropdown-content">
            <a href="#">How to Join</a>
            <a href="#">Calendar</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.COMPANIES}><button className="dropbtn">Companies</button></Link>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.ABOUT}><button className="dropbtn">About</button></Link>
          <div className="dropdown-content">
            <a href="#">What We Do</a>
            <a href="#">Sponsors</a>
            <a href="#">History</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.ABOUT}><button className="dropbtn">Member Services</button></Link>
          <div className="dropdown-content">
            <a href="#"><Link to={ROUTES.PROFILE}>Profile</Link></a>
            <a href="#"><Link to={ROUTES.TESTBANK}>Test Bank</Link></a>
            <SignOutButton />
          </div>
        </div>       
            
        <div className="collapse navbar-collapse" id="navbarResponsive"></div>
      </div>
    </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={solessun} alt = "Soles Sun" style={{height: '75px'}} /></a>

      <div className="dropdown">
          <Link to={ROUTES.STUDENTS}><button className="dropbtn">Students</button></Link>
          <div className="dropdown-content">
            <a href="#">How to Join</a>
            <a href="#">Calendar</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.COMPANIES}><button className="dropbtn">Companies</button></Link>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.ABOUT}><button className="dropbtn">About</button></Link>
          <div className="dropdown-content">
            <a href="#">What We Do</a>
            <a href="#">Sponsors</a>
            <a href="#">History</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.SIGN_IN}><button className="dropbtn">Login</button></Link>
        </div>        
            
        <div className="collapse navbar-collapse" id="navbarResponsive"></div>
      </div>
    </nav>
);

export default Navigation;
