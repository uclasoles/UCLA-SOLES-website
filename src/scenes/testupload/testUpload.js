import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
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
import { anyBlank } from '../../services/arrayFunctions'
import { fetchMajors } from '../../store/actions/majorActions';
import { getFirebase } from 'react-redux-firebase';

class TestUpload extends Component {
  state = {
    testURL: "",
    prof: "",
    course: "",
    dept: "",
    year: 0,
    quarter: "",
    type: "",
    fileSelected: false,
    showFail: false,
    showSuccess: false
  };

  constructor(props) {
    super(props);
    this.thisYear = (new Date()).getFullYear();
    
    this.setRef = ref => {
      this.file = ref;
    }
  }

  selectFile = (event) => {
    this.setState({ fileSelected: true});
  }

  componentWillMount() {
    this.props.fetchMajors();
  }

  onChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  upload = (event) => {
    event.preventDefault();

    // Create variables for Firestore and Storage
    //const db = this.props.firebase.db;
    //const db = getFirestore();
    const firebase = getFirebase();
    const storage = firebase.storage();

    // Create a variable holding uploaded file
    const file = this.file.files[0];

    // Create a variable holding a reference to Storage
    const storageRef = storage.ref();

    if (this.file.files[0] == null) {
      //this.handleShowFail();
      return;
    }

    // Create a child element within storage where file will be uploaded
    //const path = 'tests/'+this.file.files[0].name;
    //const testFile = storageRef.child(path);

    // Put file in child element and retrieve its location
    const thisComponent = this;
    firebase.uploadFile('tests/', this.file.files[0]).then(function(snapshot) {
      testFile.getDownloadURL().then(function(url) {
        thisComponent.setState({
          testURL: url,
        })
        // Upload metadata into Firestore
        /*
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
            //thisComponent.handleShowFail();
        })
        */
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
        //thisComponent.handleShowFail();
        return;
    });

    //this.handleShowSuccess();
    
  }
    
  render() {
    const { auth, authError, majors } = this.props
    const { testURL, prof, course, dept, year, quarter, type, fileSelected} = this.state

    // Creating year drop down menu
    const years = [];
    for (let i = 0; i <= 70; i++) {
      years.push(this.thisYear - i);
    }

    const isInvalid = anyBlank([prof, dept, quarter, type, course]) ||
              !fileSelected;

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
              <Form onSubmit={this.upload}>
                <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Control as="select" name="dept" onChange={this.onChange} value={dept}>
                        <option value="" disabled>Select a Department...</option>
                        { majors && majors.map(major => {return (<option key={major}>{major}</option>)})}
                      </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Control as="input" name="course" onChange={this.onChange} value={course} placeholder="Class Number"></Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{ justifyContent: 'center' }}>
                  <Form.Group as={Col}>
                    <Form.Control as="input" name="prof" onChange={this.onChange} value={prof} placeholder="Professor's Last Name"></Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control as="select" name="quarter" onChange={this.onChange} value={quarter}>
                      <option value="" disabled>Select a Quarter...</option>
                      <option>Fall</option>
                      <option>Winter</option>
                      <option>Spring</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Control as="select" name="year" onChange={this.onChange} value={year}>
                        <option value={0} disabled>Select a Year...</option>
                        {years.map((year) => {return(<option key={year.toString()} value={year}>{year}</option>)})}
                      </Form.Control>
                  </Form.Group> 
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control as="select" name="type" onChange={this.onChange} value={type}>
                      <option value="" disabled>Select Exam Type...</option>
                      <option>Midterm 1</option>
                      <option>Midterm 2</option>
                      <option>Final</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <input type="file" ref={this.setRef} onChange={this.selectFile}/>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Button disabled={isInvalid} type="submit" variant='primary' block>Upload Test</Button>
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