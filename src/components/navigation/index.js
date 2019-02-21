import React from 'react';
import { Link } from 'react-router-dom';
import solessun from './soles-sun.png';
import './agency.css';

import SignOutButton from '../signout'; 
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={solessun} alt = "Soles Sun" style={{height: '75px'}} /></a>

      <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.STUDENTS}>Students</Link></button>
          <div className="dropdown-content">
            <a href="#">How to Join</a>
            <a href="#">Calendar</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.COMPANIES}>Companies</Link></button>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.ABOUT}>About</Link></button>
          <div className="dropdown-content">
            <a href="#">What We Do</a>
            <a href="#">Sponsors</a>
            <a href="#">History</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.ABOUT}>Member Services</Link></button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Test Bank</a>
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
          <button className="dropbtn"><Link to={ROUTES.STUDENTS}>Students</Link></button>
          <div className="dropdown-content">
            <a href="#">How to Join</a>
            <a href="#">Calendar</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.COMPANIES}>Companies</Link></button>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.ABOUT}>About</Link></button>
          <div className="dropdown-content">
            <a href="#">What We Do</a>
            <a href="#">Sponsors</a>
            <a href="#">History</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><Link to={ROUTES.SIGN_IN}>Login</Link></button>
        </div>        
            
        <div className="collapse navbar-collapse" id="navbarResponsive"></div>
      </div>
    </nav>
);

export default Navigation;
