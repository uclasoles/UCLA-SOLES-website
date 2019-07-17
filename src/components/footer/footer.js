import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

// bootstrap and css components
import '../../custom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render () {
    return (
      <div id="footer">
        <Container>
          <Row>
            <Col md={{ span: 1, offset: 2 }} className="footer-item">
              <div className="row h-100 justify-content-center align-items-center">
                <a href="https://www.facebook.com/uclasoles" target="_blank" rel="noopener noreferrer" style={{marginRight: '40px'}}>
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} transform="grow-25" className="footer-social"/>
                </a>
                <a href="https://www.instagram.com/uclasoles/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} transform="grow-25" className="footer-social"/>
                </a>
              </div>
            </Col>
            <Col md={{ span: 2}} className="footer-item" style={{textAlign: 'right'}}>
              <Link to={ROUTES.ABOUT} className="footer-link">About</Link>
              <br></br>
              <Link to={ROUTES.STUDENTS} className="footer-link">Students</Link>
              <br></br>
              <Link to={ROUTES.COMPANIES} className="footer-link">Companies</Link>
            </Col>
            <Col md={{span: 5}} className="footer-item">
              <p className="footer-paragraph">
                SOLES at UCLA changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
              </p>
            </Col>
          </Row>
          <Row className="footer-copyright">
            <Col>
                <small>&copy; Copyright 2018-2019, SOLES at UCLA</small>
            </Col>
          </Row>
        </Container>
      </div>
    )
  } 
}

export default Footer;
