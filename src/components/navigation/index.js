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
          <Link to={ROUTES.STUDENTS}><button className="dropbtn">STUDENTS</button></Link>
          <div className="dropdown-content">
            <a className="navbar-brand js-scroll-trigger" href="#">HOW TO JOIN</a>
            <a className="navbar-brand js-scroll-trigger" href="#">CALENDAR</a>
            <a className="navbar-brand js-scroll-trigger" href="#">CONTACT</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.COMPANIES}><button className="dropbtn">COMPANIES</button></Link>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.ABOUT}><button className="dropbtn">ABOUT</button></Link>
          <div className="dropdown-content">
            <a className="navbar-brand js-scroll-trigger" href="#what we do">WHAT WE DO</a>
            <a className="navbar-brand js-scroll-trigger" href="#">SPONSORS</a>
            <a className="navbar-brand js-scroll-trigger" href="#">HISTORY</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">MEMBER SERVICES</button>
          <div className="dropdown-content">
            <a href="#"><Link to={ROUTES.PROFILE}>PROFILE</Link></a>
            <a href="#"><Link to={ROUTES.TESTBANK}>TEST BANK</Link></a>
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
          <Link to={ROUTES.STUDENTS}><button className="dropbtn">STUDENTS</button></Link>
          <div className="dropdown-content">
            <a href="#">HOW TO JOIN</a>
            <a href="#">CALENDAR</a>
            <a href="#">CONTACT</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.COMPANIES}><button className="dropbtn">COMPANIES</button></Link>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.ABOUT}><button className="dropbtn">ABOUT</button></Link>
          <div className="dropdown-content">
            <a href="#">WHAT WE DO</a>
            <a href="#">SPONSORS</a>
            <a href="#">HISTORY</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to={ROUTES.SIGN_IN}><button className="dropbtn">LOGIN</button></Link>
        </div>        
            
        <div className="collapse navbar-collapse" id="navbarResponsive"></div>
      </div>
    </nav>
);

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("dropbtn").style.padding = "36px 10px";
    document.getElementById("dropbtn").style.fontSize = "18px";
  } else {
    document.getElementById("dropbtn").style.padding = "72px 10px";
    document.getElementById("dropbtn").style.fontSize = "24px";
  }
}

export default Navigation;
