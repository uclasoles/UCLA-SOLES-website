import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../../custom.css';
import '../../fontawesome.js';

class SubscribeFooter extends Component {
  render () {
    return (
      <div id="subscribe-footer">
        <Container id="subscribe-form">
          <Row>
            <h2>Join our weekly newsletter!</h2>
          </Row>
          <Row>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Subscribe</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control as="input" placeholder="Email"></Form.Control>
                    </InputGroup>
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </div>
    )
  } 
}

export default SubscribeFooter;
