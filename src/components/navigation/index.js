import React from 'react';
import { Link } from 'react-router-dom';
import './agency.css';

import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component{
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src='./soles-sun.png' alt = "Soles Sun" style={{height: '100px'}} /></a>

            <div className="dropdown">
              <button className="dropbtn"><Link to={ROUTES.SIGN_UP}>Students</Link></button>
              <div className="dropdown-content">
                <a href="#">How to Join</a>
                <a href="#">Calendar</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn"><Link to={ROUTES.HOME}>Companies</Link></button>
            </div>

            <div className="dropdown">
              <button className="dropbtn"><Link to={ROUTES.LANDING}>About</Link></button>
              <div className="dropdown-content">
                <a href="#">What We Do</a>
                <a href="#">Sponsors</a>
                <a href="#">History</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn"><Link to={ROUTES.SIGN_IN}>Login</Link></button>
            </div>
            
          <div className="collapse navbar-collapse" id="navbarResponsive">
          </div>
        </div>
      </nav>

      

    );
  }
}

/*
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);
*/
export default Navigation;
