import React, { Component } from 'react';
import './agency.css';

// bootstrap and css components
import '../../custom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// fontawesome stuff
import '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
const AboutPageOld = () => (
  <div id = "what-we-do" className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <a id = "what we do">
            <h2 className="section-heading text-uppercase"><br></br><br></br><br></br><br></br>What We Do</h2>
          </a>
        </div>
      </div>
        <div className="row text-center">
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-book fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Academic Development</h4>
              <p className="text-muted">We seek to provide our students with the resources that they need to excel academically. Our annual Professor Networking Barbeque aims to connect qualified SOLES students with research positions in world-className UCLA laboratories. In order to help students get ahead in the classNameroom, we provide our <a href="http://uclatri.org" target="_blank" rel="noopener noreferrer">Bank of Knowledge</a>. Finally, we host weekly Study Nights on the Hill with free snacks!</p>
          </div>
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Chapter Development</h4>
            <p className="text-muted">Join the SOLES familia! Bridge the gap between new and continuing students by participating in MentorSHPE, physically challenge yourself by joining our IM Sports Teams, and create lasting memories at one of our football tailgates. Furthermore, our chapter aims to host at least one internal and one external social event per quarter.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-line-chart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Leadership Development</h4>
            <p className="text-muted">Looking for leadership opportunities? Join the SOLES Executive Board to lead our organization as we empower the Hispanic community, attend the SHPE Regional Leadership Development Conference (RLDC) to learn leadership skills and network with other SHPE Chapters, and develop yourself as a future leader at the SHPE National Institute for Leadership Advancement.</p>
          </div>
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-suitcase fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Professional Development</h4>
            <p className="text-muted">Still looking for that summer internship? Want to polish your elevator pitch and interviewing skills? Learn valuable professional lessons from professionals during Industry-hosted meetings, find out how to apply to and acquire internships at various events throughout the year, and get professional exposure at the SHPE National Conference.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
          </div>
            <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-globe fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Community Outreach</h4>
              <p className="text-muted">Be a part of our outreach program by helping with Engineers in Training Day, bring STEM to the community at our Noche de Ciencias, or explore the Natural Science Center with youth during Day of Science! SOLES provides weekly tutoring for local K-12 students in the classNameroom, lab tours for high school students visiting UCLA, and hosts prospective Bruins during our annual Freshman Weekend. All of our outreach efforts aim to empower Hispanics to participate in STEM.</p>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>

      <section className="bg-light" id="sponsors">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 id = "sponsors" className="section-heading text-uppercase">Sponsors</h2>
            <h3 className="section-subheading text-muted">We’d like to extend a special thanks to each of our corporate sponsors. If you represent a company and would like to become a SOLES sponsor, please reach out to our External Vice President at <a href="mailto:uclasoles.evp@gmail.com?Subject=Sponsorship%20Interest" target="_top">uclasoles.evp@gmail.com</a>!</h3>
          </div>
        </div>
        <div className="intro-text" style={{textAlign: 'center', marginBottom: '50px'}}>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="mailto:uclasoles.evp@gmail.com?Subject=Sponsorship%20Interest">Become a Sponsor</a>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" href="http://www.aerospace.org/" target="_blank">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
                <img className="img-fluid" style={{filter: 'invert(1)', verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="imgs/aerospace-logo.png" alt="Aerospace Company logo" />
              </div>
            </a>
            <div className="portfolio-caption">
              <h4>Aerospace</h4>
              <p className="text-muted">Gold Sponsor</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" href="http://www.boeing.com/" target="_blank">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
              <img className="img-fluid center-block" style={{verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="imgs/boeing-logo.png" alt="Boeing Logo" />
              </div>
            </a>
            <div className="portfolio-caption">
              <h4>Boeing</h4>
              <p className="text-muted">Gold Sponsor</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" href="https://www.chevron.com/" target="_blank">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
              <img className="img-fluid" style={{verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="imgs/chevron-logo.png" alt="Chevron Logo" />
              </div>
            </a>
            <div className="portfolio-caption">
              <h4>Chevron</h4>
              <p className="text-muted">Gold Sponsor</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" href="https://www.google.com/" target="_blank">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
              <img className="img-fluid" style={{verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="imgs/google-logo.png" alt="Google logo" />
              </div>
            </a>
            <div className="portfolio-caption">
              <h4>Google</h4>
              <p className="text-muted">Gold Sponsor</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" href="http://www.phillips66.com/" target="_blank">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <div style={{height: '250px', lineHeight: '250px', overflow: 'auto', textAlign: 'center'}}>
                <img className="img-fluid" style={{verticalAlign: 'middle', maxWidth: '100%', maxHeight: '100%'}} src="imgs/phillips66-logo.png" alt="Phillips 66 Logo" />
              </div>
            </a>
            <div className="portfolio-caption">
              <h4>Phillips 66</h4>
              <p className="text-muted">Bronze Sponsor</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
          </div>
        </div>
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

    <section id="history">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">History</h2>
            <h3 className="section-subheading text-muted">Let us teach you a little about us...</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img src="/imgs/shpe-logo.jpg" className="rounded-circle img-fluid" alt="shpe logo"/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>1974</h4>
                    <h4 className="subheading">SHPE Founded</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">The Society of Hispanic Professional Engineers (SHPE) was founded in the Los Angeles area in 1978. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="/imgs/soles-sun-square.png" alt="rounded-circle" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>1978</h4>
                    <h4 className="subheading">SOLES Founded</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">The Society of Latino Engineers and Scientists (SOLES) was established as a chapter of SHPE at UCLA with the intent of increasing Hispanic representation amongst STEM majors at the university.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="/img/about/2.jpg" alt="rounded-circle" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="rounded-circle" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="rounded-circle" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
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
          </div>
        </div>
      </div>
    </section>
);
*/

class AboutPage extends Component {
  render () {
    return (
      <div>
        {/* header area */}
        <Container fluid>
          <Row id="centered-masthead" className="justify-content-center align-items-center">
            <div className="intro-text">
              <div className="intro-lead-in">Society of Latino Engineers and Scientists</div>
              <div className="intro-heading">SOLES at UCLA</div>
              <Button variant="primary" href="#what we do">Learn More<FontAwesomeIcon icon={['fas', 'angle-down']} className="dropdown-icon-right" inverted="true"/></Button>
            </div>
          </Row>
        </Container>

        {/* what we do area */}
        <Container id="what-we-do">
          <Row>
          this is a cool thing that i want to show you doing the thing
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
