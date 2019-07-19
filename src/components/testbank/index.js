import React, { Component } from 'react';
import { SmallMasthead } from '../navigation'
import { AuthUserContext, withAuthorization } from '../session';
import * as ROUTES from '../../constants/routes';

// react-bootstrap components
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

// fontawesome stuff
import '../../fontawesome.js';

// allows react router and bootstrap to play nicely
import { LinkContainer } from 'react-router-bootstrap';

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
            <SmallMasthead></SmallMasthead>
            <Card className="text-center" text="dark" style={{ justifyContent: 'center' }}>
              <Card.Header as="h3" style={{ color: 'black' }}>
                Test Bank
              </Card.Header>
              <Card.Body>
                <Row style={{ alignItems: 'right'}}>
                  <LinkContainer to={ROUTES.TESTUPLOAD}>
                    <Button style="primary">Upload a Test</Button>
                  </LinkContainer>
                </Row>
                <br></br>
                <Form>
                  <Form.Group href='test-filter' controlId="exampleForm.ControlSelect1">
                    <Form.Row>
                      <Col xs={8}>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control as="input" placeholder="Enter Professor, Class, Year, etc.."></Form.Control>
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Dept</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control as="select" onChange={this.handleDeptChange}>
                            <option>None selected</option>
                            {this.state.deptOptions.map(t => <option>{t}</option>)}
                          </Form.Control>
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Class</InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control as="select" onChange={this.handleClassChange}>
                            <option>None selected</option>
                            {this.state.classOptions.map(t => <option>{t}</option>)}
                          </Form.Control>
                        </InputGroup>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

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
          </div> 
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(TestBankPage);