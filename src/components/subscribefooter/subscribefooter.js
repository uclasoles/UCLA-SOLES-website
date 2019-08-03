import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './subscribefooter.css'
import '../../fontawesome.js'

class SubscribeFooter extends Component {
  state = {
    email: '',
    error: null
  }

  constructor (props) {
    super(props)
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.subscribeEmail(this.state);
	};

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render () {
    const { email } = this.state

    return (
      <div id="subscribe-footer">
        <div className="row h-100 justify-content-center align-items-center">
					<Card style={{ width:'30rem', color: 'black'  }}>
            <Card.Header as="h3">Weekly Newsletter</Card.Header>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <p><i>Keep up to date with the latest SOLES news.</i></p>
                
                <Form.Group controlId="formSubscribeEmail">
                  <Form.Control name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/>
                </Form.Group>

                <Button type="submit" variant='primary' block>Sign In</Button>
              </Form>
            </Card.Body>
					</Card>
				</div>
      </div>
    )
  } 
}

export default SubscribeFooter;
