import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

class TestUploadPage extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
              <Container fluid>
                <Row id="centered-masthead" className="justify-content-center align-items-center">
                <Card style={{ color: 'black', width:'30rem' }}>
                  <Card.Header as="h3" style={{ color: 'black', textAlign: 'left' }}>
                    <LinkContainer to={ROUTES.TESTBANK}><FontAwesomeIcon icon={['fas', 'chevron-left']} size='xs' className="card-heading-icon"/></LinkContainer>
                    Upload a Test
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Row>
                        <Col>
                            <Form.Label>Select a Department</Form.Label>
                            <Form.Control as="select">
                            <option>Math</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                            <option>Aerospace</option>
                            <option>BioE</option>
                            <option>ChemE</option>
                            <option>Computer Science</option>
                            <option>Civil</option>
                            <option>Electrical</option>
                            <option>Materials</option>
                            <option>Mechanical</option>
                            <option>Etc.</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Select a Class</Form.Label>
                            <Form.Control as="input" placeholder="Enter class number.."></Form.Control>
                        </Col>
                      </Form.Row>

                      <Form.Row style={{ justifyContent: 'center' }}>
                        <Form.Label>Professor</Form.Label>
                        <Form.Control as="input" placeholder="Enter Name.."></Form.Control>
                      </Form.Row>

                      <Form.Row>
                        <Col>
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select">
                            <option>2019</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2016</option>
                            <option>2015</option>
                            <option>2014</option>
                            <option>2013</option>
                            <option>2012</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Quarter</Form.Label>
                            <Form.Control as="select">
                            <option>Fall</option>
                            <option>Winter</option>
                            <option>Spring</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select">
                            <option>Midterm 1</option>
                            <option>Midterm 2</option>
                            <option>Final</option>
                            </Form.Control>
                        </Col>
                      </Form.Row>
                    </Form> 
                    </Card.Body>
                  </Card>
                </Row>
              </Container>
          </div> 
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TestUploadPage);