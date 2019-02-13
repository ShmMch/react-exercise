import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
const hexColorPattern=/^[a-zA-Z0-9#]*$/;
class App extends Component {
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
    this.state={};
  }

  onChange(e){
    if(!hexColorPattern.test(e.target.value))
        e.target.value = e.target.defaultValue;
    else{
        e.target.defaultValue =e.target.value;
        this.setState({bg:e.target.value});
      }
  }
 
  render() {
    return (
      <Container fluid className='h-100'>
        <Row className='h-100 justify-content-center align-items-center'> 
          <Col className="text-center" sm={12} md={6} >
          <input ref={(node) => this.textInput = node}onChange={this.onChange}/> 
          </Col>
          <Col sm={12}  md={6} style={{backgroundColor:this.state.bg}}>
          </Col>
        </Row>
      </Container>
      );
  }
}

export default App;
