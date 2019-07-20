import React, { Component } from 'react';
import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

// react-bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// allows react router and bootstrap to play nicely
import { LinkContainer } from 'react-router-bootstrap';


class TestUploadPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testURL: "",
      prof: "",
      course: "",
      dept: "",
      year: 0,
      quarter: "",
      type: "",

      showFail: false,
      showSuccess: false
    };

    this.setRef = ref => {
      this.file = ref;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleCloseFail = this.handleCloseFail.bind(this);
    this.handleShowFail = this.handleShowFail.bind(this);
    this.handleCloseSuccess = this.handleCloseSuccess.bind(this);
    this.handleShowSuccess = this.handleShowSuccess.bind(this);
  }


  handleCloseFail = () => this.setState({showFail: false});
  handleShowFail = () => this.setState({showFail: true});

  handleCloseSuccess = () => this.setState({showSuccess: false});
  handleShowSuccess = () => this.setState({showSuccess: true});

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleUpload(e) {
    e.preventDefault();

    // Create variables for Firestore and Storage
    const db = this.props.firebase.db;
    const storage = this.props.firebase.storage;

    // Create a variable holding uploaded file
    const file = this.file.files[0];

    // Create a variable holding a reference to Storage
    const storageRef = storage.ref();

    if (this.file.files[0] == null) {
      this.handleShowFail();
      return;
    }

    // Create a child element within storage where file will be uploaded
    const testFile = storageRef.child('tests/'+this.file.files[0].name);

    // Put file in child element and retrieve its location
    const thisComponent = this;
    testFile.put(file).then(function(snapshot) {
      testFile.getDownloadURL().then(function(url) {
        thisComponent.setState({
          testURL: url,
        })
        // Upload metadata into Firestore
        db.collection("tests").add({
          url: thisComponent.state.testURL,
          course: thisComponent.state.course,
          dept: thisComponent.state.dept,
          prof: thisComponent.state.prof,
          type: thisComponent.state.type,
          quarter: thisComponent.state.quarter,
          year: thisComponent.state.year
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        })
        //Reset state variables
        thisComponent.setState({
          testURL: "",  
          prof: "",
          course: "",
          dept: "",
          year: 0,
          quarter: "",
          type: ""
        })
      })
    })
    .then(function() {
    })
    .catch(function(error) {
        console.error("Error storing file: ", error);
        thisComponent.handleShowFail();
    });

    this.handleShowSuccess();
    
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
                      <Form  style={{ textAlign: 'left' }} onSubmit={this.handleUpload}>
                        <Form.Row>
                          <Form.Group as={Col}>
                              <Form.Label>Select a Department</Form.Label>
                              <Form.Control name="dept" as="select" onChange={this.handleChange} value={this.state.dept}>
                                <option>None</option>
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
                          </Form.Group>
                          <Form.Group as={Col}>
                              <Form.Label>Select a Course</Form.Label>
                              <Form.Control name="course" as="input" placeholder="Enter Course Number"
                                            onChange={this.handleChange} value={this.state.course}></Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Professor</Form.Label>
                            <Form.Control name="prof" as="input" placeholder="Enter Name"
                                          onChange={this.handleChange} value={this.state.prof}/>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col}>
                              <Form.Label>Year</Form.Label>
                              <Form.Control name="year" as="select" onChange={this.handleChange} value={this.state.year}>
                                <option>None</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                              </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col}>
                              <Form.Label>Quarter</Form.Label>
                              <Form.Control name="quarter" as="select" onChange={this.handleChange} value={this.state.quarter}>
                                <option>None</option>
                                <option>Fall</option>
                                <option>Winter</option>
                                <option>Spring</option>
                              </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col}>
                              <Form.Label>Type</Form.Label>
                              <Form.Control name="type" as="select" onChange={this.handleChange} value={this.state.type}>
                                <option>None</option>
                                <option>Midterm 1</option>
                                <option>Midterm 2</option>
                                <option>Final</option>
                              </Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Control as="file-input"></Form.Control>
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col}>
                            <input type="file" ref={this.setRef} />
                          </Form.Group>
                          <Form.Group as={Col}>
                            <LinkContainer to={ROUTES.TESTUPLOAD}>
                              <button onClick={this.handleUpload}>Upload Test</button>
                            </LinkContainer>
                          </Form.Group>
                        </Form.Row>

                      </Form>
                    </Card.Body>
                  </Card>
                </Row>
              </Container>

              <Modal show={this.state.showFail} onHide={this.handleCloseFail}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Uh oh! Make sure to select a file before clicking 'Upload Test.'
                  <br></br><br></br>
                  Selected a file? This may be an error on our end. Please try again or contact an administrator
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleCloseFail}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showSuccess} onHide={this.handleCloseSuccess}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Succeeded!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for your contribution to SOLES.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleCloseSuccess}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TestUploadPage);