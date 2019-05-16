import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

class TestBankPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initTests : [
        {"professor":"conley", "year":"2013", "quarter":"fall", "type":"midterm 1", "department":"math", "class":"61"},
        {"professor":"smallberg", "year":"2012", "quarter":"winter", "type":"midterm 1", "department":"cs", "class":"32"},
        {"professor":"may", "year":"2016", "quarter":"spring", "type":"midterm 2", "department":"math", "class":"32B"},
        {"professor":"may", "year":"2017", "quarter":"winter", "type":"final", "department":"math", "class":"32B"}
      ],

      tests: [],
      classOptions: [],
      deptOptions: [],
      dept: '',
      class: ''
    };
    this.state.deptOptions = this.initDeptOptions();
    this.handleDeptChange = this.handleDeptChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.state.tests = this.state.initTests;
  }

  initDeptOptions() {
    var deptArray = this.getDepartments(this.state.initTests);
    return deptArray;
  }

  getDepartments(testArray) {
    var deptArray = [];
    var arrayLength = testArray.length;
    for (var i = 0; i < arrayLength; i++) {
      var curr = testArray[i].department;
      if (deptArray.indexOf(curr) == -1) {
        deptArray.push(curr);
      }
    }
    return deptArray;
  }
  
  handleDeptChange(event) {
    if (event.target.value == "None selected") {
      this.setState({ dept: '', tests: this.state.initTests, class: '', classOptions: [] });
      return;
    }
    var testArray = this.filterListByDept(event.target.value);
    var classArray = this.getClassesInDepartment(testArray);
    this.setState({ dept: event.target.value, tests: testArray, class: '', classOptions: classArray });
  }

  handleClassChange(event) {
    if (event.target.value == "None selected") {
      this.setState({ class: '', tests: this.filterListByDept(this.state.dept) });
      return;
    }
    var testArray = this.filterListByClass(event.target.value);
    this.setState({ class: event.target.value, tests: testArray });
  }
  
  filterListByDept(filterText) {
    var updatedList = this.state.initTests;       //Resets to default list of tests, then filters by dept
    return updatedList.filter(function(item){
      return item.department === filterText;
    });
  }

  filterListByClass(filterText) {
    var updatedList = this.state.initTests;       //Resets to default list filtered by department, then filters by class
    updatedList = this.filterListByDept(this.state.dept);
    return updatedList.filter(function(item){
      return item.class === filterText;
    });
  }

  getClassesInDepartment(testsInDept) {
    var classArray = [];
    var arrayLength = testsInDept.length;
    for (var i = 0; i < arrayLength; i++) {
      var curr = testsInDept[i].class;
      if (classArray.indexOf(curr) == -1) {
        classArray.push(curr);
      }
    }
    return classArray;
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {/* header area */}
            <Container fluid>
              <Row id="centered-masthead" className="justify-content-center align-items-center">
                <Card text="dark" style={{ width: '30rem' }}>
                  <Card.Body>
                    <Card.Title>Test Bank</Card.Title>
                    <Form>
                      <Form.Group href='test-filter' controlId="exampleForm.ControlSelect1">
                        <Form.Row>
                          <Col>
                            <Form.Label>Select a Department</Form.Label>
                            <Form.Control as="select" onChange={this.handleDeptChange}>
                              <option>None selected</option>
                              {this.state.deptOptions.map(t => <option>{t}</option>)}
                            </Form.Control>
                          </Col>
                          <Col>
                            <Form.Label>Select a Class</Form.Label>
                            <Form.Control as="select" onChange={this.handleClassChange}>
                              <option>None selected</option>
                              {this.state.classOptions.map(t => <option>{t}</option>)}
                            </Form.Control>
                          </Col>
                        </Form.Row>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
            </Container>

            <Table hover>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Professor</th>
                  <th>Year</th>
                  <th>Quarter</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tests.map(t => 
                  <tr>
                    <td>{t.class}</td>
                    <td>{t.professor}</td>
                    <td>{t.year}</td>
                    <td>{t.quarter}</td>
                    <td>{t.type}</td>
                  </tr>
                )}
              </tbody>
            </Table>     
            <Card style={{ width:'25rem' }}>
              <Card.Header>Upload a Test</Card.Header>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Label>Select a Department</Form.Label>
                    <Form.Control as="select">
                      {this.state.initTests.map(t => <option>{t.department}</option>)}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Label>Select a Class</Form.Label>
                    <Form.Control as="select">
                      {this.state.initTests.map(t => <option>{t.class}</option>)}
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row>
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
            </Card>      
          </div> 
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TestBankPage);