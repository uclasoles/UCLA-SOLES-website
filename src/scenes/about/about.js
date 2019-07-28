import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../custom.css';
import '../../fontawesome.js';

/*
const AboutPageOld = () => (
        NOTE: THIS IS GETTING MOVED TO THE COMPANIES PAGE SO KEEP IT FOR NOW
        <div className="row" style={{marginTop: '50px'}}>
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
          <table id="sponsor-table">
            <tbody id="sponsor-tbody">
            <tr id="">
            <td><b>Benefits</b></td>
            <td><b>Bronze ($1000)</b></td>
            <td><b>Silver ($1,500)</b></td>
            <td><b>Gold ($2,000+)</b></td>
            </tr>
            <tr>
            <td><span style={{fontWeight: 400}}>Resume file</span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            </tr>
            <tr>
            <td><span style={{fontWeight: 400}}>Company logo and link on website</span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true" /></span></td>
            </tr>
            <tr>
            <td><span style={{fontWeight: 400}}>Table at Tri-Org End-of-Year Banquet (2 representatives)</span></td>
            <td></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true"></i></span></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true"></i></span></td>
            </tr>
            <tr>
            <td><span style={{fontWeight: 400}}>Company logo on major outreach event t-shirts</span></td>
            <td></td>
            <td></td>
            <td><span style={{fontWeight: 400}}><i className="fa fa-check" aria-hidden="true"></i></span></td>
            </tr>
            </tbody>
            </table>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </section>
);
*/

class About extends Component {

  scrollToBottom = () => {
    this.whatWeDo.scrollIntoView({ behavior: "smooth" });
  }

  render () {
    return (
      <div>
        {/* header area */}
        <Container fluid>
          <Row id="centered-masthead" className="justify-content-center align-items-center">
            <div className="intro-text">
              <div className="intro-lead-in">Society of Latino Engineers</div>
              <div className="intro-heading">SOLES at UCLA</div>
              <Button variant="primary" onClick={this.scrollToBottom}>Learn More<FontAwesomeIcon icon={['fas', 'angle-down']} className="dropdown-icon-right" inverted="true"/></Button>
            </div>
          </Row>
        </Container>

        {/* what we do area */}
        <Container ref={(el) => { this.whatWeDo = el; }}>
          <Row>
            <Col>
                <h2 className="section-heading text-uppercase text-center"><br></br><br></br><br></br>What We Do</h2>
            </Col>
          </Row>

          <Row className="text-center">
            <Col md={{ span: 6 }}>
              <span className="fa-layers fa-fw fa-4x what-we-do-icons">
                <FontAwesomeIcon icon={['fas', 'circle']} transform="grow-18" className="text-primary"/>
                <FontAwesomeIcon icon={['fas', 'graduation-cap']} color="white"/>
              </span>
              <h4>Academic Development</h4>
              <p className="text-muted">We seek to provide our membership with resources that will help them to excel academically. Our annual Professor Networking Barbeque connects qualified SOLES students with research positions in UCLA's world-class laboratories. To help our members in the classroom, we provide a regularly updated Test Bank to Local Members. Finally, we host weekly Study Nights on the Hill with free snacks!</p>
            </Col>
            <Col md={{ span: 6 }}>
              <span className="fa-layers fa-fw fa-4x what-we-do-icons">
                <FontAwesomeIcon icon={['fas', 'circle']} transform="grow-18" className="text-primary"/>
                <FontAwesomeIcon icon={['fas', 'users']} color="white"/>
              </span>
              <h4>Chapter Development</h4>
              <p className="text-muted">Join the SOLES familia! Bridge the gap between new and continuing students by participating in MentorSHPE, physically challenge yourself by joining our IM Sports Teams, and create lasting memories at one of our football tailgates. Furthermore, our chapter aims to host at least one internal and one external social event per quarter.</p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col md={{ span: 6 }}>
              <span className="fa-layers fa-fw fa-4x what-we-do-icons">
                <FontAwesomeIcon icon={['fas', 'circle']} transform="grow-18" className="text-primary"/>
                <FontAwesomeIcon icon={['fas', 'chart-line']} color="white"/>
              </span>
              <h4>Leadership Development</h4>
              <p className="text-muted">Looking for leadership opportunities? Join the SOLES Executive Board to empower the Hispanic community, attend the SHPE Regional Leadership Development Conference (RLDC) to learn leadership skills and network with other SHPE Chapters, and develop yourself as a future leader at the SHPE National Institute for Leadership Advancement.</p>
            </Col>
            <Col md={{ span: 6 }}>
              <span className="fa-layers fa-fw fa-4x what-we-do-icons">
                <FontAwesomeIcon icon={['fas', 'circle']} transform="grow-18" className="text-primary"/>
                <FontAwesomeIcon icon={['fas', 'suitcase']} color="white"/>
              </span>
              <h4>Professional Development</h4>
              <p className="text-muted">Still looking for a summer internship? Want to polish your elevator pitch and interviewing skills? Learn valuable professional lessons from professionals during industry-hosted meetings, find out how to apply to and acquire internships at various events throughout the year, and get professional exposure at the SHPE National Conference.</p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col md={{ span: 6, offset: 3 }}>
              <span className="fa-layers fa-fw fa-4x what-we-do-icons">
                <FontAwesomeIcon icon={['fas', 'circle']} transform="grow-18" className="text-primary"/>
                <FontAwesomeIcon icon={['fas', 'globe-americas']} color="white"/>
              </span>
              <h4>Community Outreach</h4>
              <p className="text-muted">Be a part of our outreach program by helping with Engineers in Training Day, bring STEM to the community at our Noche de Ciencias, or explore the Natural Science Center with youth during Day of Science! SOLES provides weekly tutoring for local K-12 students in the classNameroom, lab tours for high school students visiting UCLA, and hosts prospective Bruins during our annual Freshman Weekend. All of our outreach efforts aim to empower Hispanics to participate in STEM.<br></br><br></br><br></br><br></br><br></br></p>
            </Col>
          </Row>
        </Container>

        {/* sponsors section */}
        <div className="bg-light">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }} className="text-center">
                <h2 className="section-heading text-uppercase"><br></br><br></br><br></br>Sponsors</h2>
                <h3 className="section-subheading text-muted">We’d like to extend a special thanks to each of our corporate sponsors. If you represent a company are interested in becoming a SOLES sponsor, please check out our <Link to={ROUTES.COMPANIES}>companies</Link> page!</h3>
                <LinkContainer to={ROUTES.COMPANIES}><Button variant="primary">Become a Sponsor</Button></LinkContainer>
              </Col>
            </Row>
          </Container>

          {/* once adding more sponsors automatically is added this will be dynamic */}
          <Container id="sponsors">
            <Row>
              <Col md={{span:4}} sm={{span:6}} className="portfolio-item">
                <a className="portfolio-link" href="http://www.aerospace.org/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={['fas', 'plus']} transform="grow-18"/>
                    </div>
                  </div>
                  <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
                    <img className="img-fluid" style={{verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="https://res.cloudinary.com/dzrbsvx06/image/upload/v1557851710/aerospace_logo.png" alt="Aerospace Company logo" />
                  </div>
                </a>
                <div className="portfolio-caption">
                  <h4>Aerospace</h4>
                  <p className="text-muted">Gold Sponsor</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* history section */}
        <Container id="history">
          <Row>
            <Col lg={{span:12}} className="text-center">
              <h2 className="section-heading text-uppercase"><br></br><br></br>History</h2>
              <h3 className="section-subheading text-muted">Let us teach you a little about us...</h3>
            </Col>
          </Row>

          <Row>
            <Col lg={{span:12}}>
              <ul className="timeline">

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img src="https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,w_160/v1558485754/shpe_national_logo.png" className="rounded-circle img-fluid" alt="SHPE Logo"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1974</h4>
                      <h4 className="subheading">SHPE Founded</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">The <a href="https://shpe.org" target="_blank" rel="noopener noreferrer">Society of Hispanic Professional Engineers</a> was founded in the Los Angeles area in 1978. Their objective is to form a national organization of professional Engineers to serve as role models in the Hispanic community.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src='https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,h_160,q_100,w_160/soles-sun.png' alt="SOLES Logo" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1978</h4>
                      <h4 className="subheading">SOLES Founded</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">The Society of Latino Engineers was established as a chapter of SHPE at UCLA with the intent of increasing Hispanic representation amongst STEM majors at the university.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="https://res.cloudinary.com/dzrbsvx06/image/upload/c_scale,w_160/v1558485754/ceed_logo.png" alt="CEED Logo" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1983</h4>
                      <h4 className="subheading">CEED Founded</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">The <a href="https://www.ceed.ucla.edu/mission/" target="_blank" rel="noopener noreferrer">Center for Excellence in Engineering and Diversity</a> was established at UCLA to bolster the representation of underrepresented minorities in engineering at UCLA.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-image">
                    <FontAwesomeIcon icon={['fas', 'users']} color="white" transform="down-7" size="5x"/>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>1992</h4>
                      <h4 className="subheading">UCLA Tri-Org Founded</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Comprising of the Society of Latino Engineers, the <a href="https://nsbebruins.wixsite.com/nsbe" target="_blank" rel="noopener noreferrer">National Society of Black Engineers</a> and the <a href="https://www.facebook.com/uclaaises" target="_blank" rel="noopener noreferrer">American Indian Science and Engineering Society</a>, the UCLA Tri-Org was formed to increase the representation of minority peoples in STEM fields.</p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                      <br />Of Our
                      <br />Story!</h4>
                  </div>
                </li>

              </ul>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
