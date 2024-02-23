import React from 'react'
import Image4 from "../assests/section3.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Section3() {
  return (
    <Container className="mt-5 mb-5">
        <Row>
            <Col lg={7} md={7} sm={12} xs={12} data-aos="fade-right">
            <h5  style={{color:"blue"}} className="top">Get In touch</h5>
       <h3 style={{"color":"#0a2351",fontWeight:'900'}} className="text3">Preparing for your business<br/> success with IT Solution</h3>
     
            <p style={{color:"#8e918b"}} className="text6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis <br/> ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <Row>
       <Col lg={5} md={6} sm={6} xs={6} data-aos="zoom-in" ><Button variant="primary" className="p-3 custom-button1 animated1" style={{fontWeight:'500'}}>Meet With Us</Button></Col> 
       
       </Row>
            </Col>
            <Col  lg={4} md={5} sm={12} xs={12} data-aos="fade-left">
            <img src={Image4} className="image3" alt="sectionpic"></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Section3
