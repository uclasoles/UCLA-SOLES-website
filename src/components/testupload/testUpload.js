import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../constants/routes'
import '../../fontawesome.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchMajors } from '../../store/actions/majorActions';

class TestUpload extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMajors();
  }
    
  render() {
    const { auth, authError, majors } = this.props
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div>
        <Container fluid>
          <Row id="centered-masthead" className="justify-content-center align-items-center">
          <Card style={{ color: 'black', width:'30rem' }}>
            <Card.Header as="h3" style={{ color: 'black', textAlign: 'left' }}>
              <LinkContainer to={ROUTES.TEST_BANK}><FontAwesomeIcon icon={['fas', 'chevron-left']} size='xs' className="card-heading-icon"/></LinkContainer>
              Upload a Test
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Row>
                  <Col>
                      <Form.Label>Select a Department</Form.Label>
                      <Form.Control as="select">
                        { majors && majors.map(major => {return (<option>{major}</option>)})}
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
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    majors: state.majors.majors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMajors: () => dispatch(fetchMajors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestUpload)