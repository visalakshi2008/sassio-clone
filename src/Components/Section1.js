import React from 'react';
import Image1 from "../assests/section1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image2 from "../assests/card1.jpg";
import Image3 from "../assests/card2.jpeg";
import Button from "react-bootstrap/Button";
function Section1() {
  return (
    <Container className="mb-5 mt-5" id="about">
        <Row>
            <Col lg={6}  md={6} sm={12} xs={12}>
            <img src={Image1} className="image3" alt="section1"></img>
            </Col>
            <Col lg={6} md={6} sm={12}xs={12} data-aos="fade-down">
            <h5 style={{color:"blue"}} >About Us</h5>
            <h3 style={{"color":"#0a2351",fontWeight:'900'}} className="text3">We believe in helping pepole pay attention to what matters</h3>
            <p style={{color:"#8e918b"}} className="text6">Our team combines expertise, creativity, and cutting-edge technology to deliver tailor-made software products that exceed expectations and drive success.</p>
           <Row data-aos="fade-up">
            <Col lg={2} md={3} sm={3} xs={3}>
            <img src={Image2} width={70} alt="section-card"></img>
            </Col>
            <Col>
            <h5 style={{"color":"#0a2351",fontWeight:'600'}}>User Experience</h5>
            <p style={{color:"#0a2351"}}>Skilled professionals are always ready to provide reliable services to our clients!</p>
            </Col>
           </Row>
           <Row data-aos="fade-up">
            <Col lg={2} md={3} sm={3} xs={3}>
            <img src={Image3} width={80} alt="section-card"></img>
            </Col>
            <Col>
            <h5 style={{"color":"#0a2351",fontWeight:'600'}}>Complex B2B Solution</h5>
            <p style={{color:"#0a2351"}}>Branches are situated in major metro cities and overseas, always open for you!</p>
            </Col>
           </Row>
           <Row>
       <Col lg={4} md={6} sm={4} xs={6} data-aos="zoom-in" ><Button variant="primary" className="p-3 custom-button1 animated2" style={{fontWeight:'500'}}>Learn More</Button></Col> 
       <Col lg={4} md={6} sm={6} xs={6} data-aos="zoom-in">
       <Button variant="primary" className="p-3 custom-button2 animated2" style={{fontWeight:'500'}}>Contact Now</Button>
       </Col >  
       </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Section1
