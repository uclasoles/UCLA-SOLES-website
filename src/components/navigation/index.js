import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import solessun from './soles-sun.png';
import './agency.css';

import SignOutButton from '../signout'; 
import { TestBankButton } from '../testbank';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../session';

let ScrollLink = Scroll.Link;

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

class NavigationAuth extends React.Component {
  constructor(props) {
    super(props);
    //this.scrollToTop = this.scrollToTop.bind(this);
    this.mainNav = React.createRef();
  }

  componentDidMount () {      
    window.onscroll =()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.mainNav.current.style.padding = "0px 0px";
        this.mainNav.current.style.backgroundColor = 'rgba(21,25,29,100)';
      } else {
        this.mainNav.current.style.padding = "20px 20px";
        this.mainNav.current.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref={this.mainNav}>
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
                <ScrollLink to="#what we do" activeClass="active" spy={true} smooth={true} duration={500}>WHAT WE DO</ScrollLink>
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
    )
  } 
}

class NavigationNonAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0 };
    //this.scrollToTop = this.scrollToTop.bind(this);
    this.mainNav = React.createRef();
  }

  componentDidMount () {      
    window.onscroll =()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.mainNav.current.style.padding = "0px 0px";
        this.mainNav.current.style.margin = "0px";
        this.mainNav.current.style.backgroundColor = 'rgba(21,25,29,100)';
      } else {
        this.mainNav.current.style.padding = "20px 20px";
        this.mainNav.current.style.margin = "10px";
        this.mainNav.current.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }
  }
  
  render () {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref={this.mainNav}>
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
                <ScrollLink to="#what-we-do" activeClass="active" spy={true} smooth={true} duration={500}>
                  <button className="btn">WHAT WE DO</button>
                </ScrollLink>
                <a href="#sponsors">SPONSORS</a>
                <a href="#history">HISTORY</a>
              </div>
            </div>

            <div className="dropdown">
              <Link to={ROUTES.SIGN_IN}><button className="dropbtn">LOGIN</button></Link>
            </div>        
                
            <div className="collapse navbar-collapse" id="navbarResponsive"></div>
          </div>
        </nav>
    )
  } 
}
/*
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("dropbtn").style.padding = "36px 10px";
    document.getElementById("dropbtn").style.fontSize = "18px";
  } else {
    document.getElementById("dropbtn").style.padding = "72px 10px";
    document.getElementById("dropbtn").style.fontSize = "24px";
  }
}

function navbarCollapse() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
}
*/
export default Navigation;
