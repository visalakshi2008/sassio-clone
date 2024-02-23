import React from 'react'
import Image5 from "../assests/section4.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Image2 from "../assests/Imag2.png";
import Image3 from "../assests/Image2.png";
import Image4 from "../assests/Image.png";

function Section5() {
  return (
    <Container className="mb-5 mt-5 padding">
        <Row>
            <Col lg={6} md={6} sm={12} xs={12} >
            <h5 data-aos="fade-up" style={{color:"blue"}}>Why Choose Us</h5>
            <h3   data-aos="fade-up" style={{"color":"#0a2351",fontWeight:'900'}} className="text3">Some of reason for choose our IT solutions</h3>
            <p  data-aos="fade-up" style={{color:"#8e918b"}} className="text6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.  </p>
           <Row  data-aos="fade-up">
            <Col lg={2}  md={3} sm={3} xs={3}>
            <img src={Image2} width={80} alt="section-card"></img>
            </Col>
            <Col>
            <h5 style={{"color":"#0a2351",fontWeight:'600'}}>Product Designs</h5>
            <p style={{color:"#0a2351"}}>Skilled professionals are always ready to provide reliable services to our clients!</p>
            </Col>
           </Row>
           <Row  data-aos="fade-up">
            <Col lg={2} md={3} sm={3} xs={3}>
            <img src={Image3} width={80} alt="section-card"></img>
            </Col>
            <Col>
            <h5 style={{"color":"#0a2351",fontWeight:'600'}}>Big Data & Analytics</h5>
            <p style={{color:"#0a2351"}}>Branches are situated in major metro cities and overseas, always open for you!</p>
            </Col>
           </Row>
           <Row  data-aos="fade-up">
            <Col lg={2}  md={3} sm={3} xs={3}>
            <img src={Image4} width={90} alt="section-card"></img>
            </Col>
            <Col >
            <h5 style={{"color":"#0a2351",fontWeight:'600'}}>Maintain web data</h5>
            <p style={{color:"#0a2351"}}>Skilled professionals are always ready to provide reliable services to our clients!</p>
            </Col>
           </Row>
          
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} data-aos="fade-left">
            <img  src={Image5} alt="section2" className='image4'></img>
            </Col>
        </Row>
    </Container>
  )
}

export default Section5
