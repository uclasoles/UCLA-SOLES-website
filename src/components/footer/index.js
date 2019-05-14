import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

// bootstrap and css components
import '../../custom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// allows react router and bootstrap to play nicely
import { LinkContainer } from 'react-router-bootstrap';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="footer">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 3 }}>
              <h4>About</h4>
              <h4>Sponsors</h4>
              <h4>Companies</h4>
            </Col>
            <Col md={{span: 5}}>
              <p>
                SOLES at UCLA changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  } 
}

export default Footer;
