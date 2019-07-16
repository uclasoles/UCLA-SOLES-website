import React from 'react';

import { SmallMasthead } from '../navigation'

// reactstrap stuff
import '../../custom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// for google cal embedding
import Iframe from 'react-iframe'

const StudentsPage = () => (
  <div>
  	<SmallMasthead />
    <h1>Masthead with Subscribe form and upcoming events</h1>
    <Container>
    	<Row>
    		<Col md={{ span: 2, offset: 1 }}>
    			<h2>Calendar</h2>
    		</Col>
    		<Col md={8}>
    			<p className="calendar-paragraph">This calendar is updated regularly with upcoming events throughout the quarter. Please <a href="www.google.com">subscribe</a> to this calendar and <a href="www.google.com">join</a> our weekly newsletter for the most up-to-date information!</p>
    		</Col>
    	</Row>
    	<Row style={{alignItems:"center",justifyContent: "center"}}>
    		<Iframe url="https://calendar.google.com/calendar/embed?src=uclasoles%40gmail.com&ctz=America%2FLos_Angeles"
	        width="800px"
	        height="600px"
	        scrolling="no"
	        display="initial"
	        position="relative"/>
    	</Row>
    </Container>
    <h2>Embedded PDF of By-Laws</h2>
  </div>
);

export default StudentsPage;
