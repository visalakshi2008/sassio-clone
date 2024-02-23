import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Image1 from "../assests/option1.jpg"
import Image2 from "../assests/option2.jpg"
import Image3 from "../assests/option3.jpeg"
import Image4 from "../assests/option4.jpeg"
import Image6 from "../assests/back2222.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Section9() {
  return (
    <>
   
    <Container className="mb-5">
    <div>
          <center className='mb-5' data-aos="fade-up">
       <h5  style={{color:"blue",paddingTop:"50px"}}>How It works</h5>
       <h3 style={{"color":"#0a2351",fontWeight:'900',fontSize:'35px'}}>Check out our work process</h3>
       <Col lg={7}>
            <p style={{color:"#8e918b"}} className="text6">dunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </Col>
    </center>
      
    </div>
        <Row >
            <Col data-aos="fade-right" lg={3}  md={6} sm={6} xs={12}>
               <Row>
                <Col lg={5} sm={5} xs={4} > <img src={Image1} width={120} alt="starting"></img> 
                </Col>
                <Col lg={7} sm={7} xs={8}>
                <h4 className='py-2' style={{"color":"#0a2351",fontWeight:'900'}}>01 <span style={{fontWeight:"500",fontSize:"15px"}}>Step</span></h4>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>Concept</h4>
                </Col>
               </Row>
                <p style={{color:"#8e918b"}} className="text6">
                se ultrices gravida. Risus commorra maecenas accumsan.
                </p>
            </Col>
            <Col  data-aos="fade-right" lg={3} md={6} sm={6} xs={12}>
               <Row>
                <Col lg={5} sm={5} xs={4}> <img src={Image2} width={120} alt="starting"></img> 
                </Col>
                <Col lg={7}  sm={7} xs={8}>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>02 <span style={{fontWeight:"500",fontSize:"15px"}}>Step</span></h4>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>Request a Meeting</h4>
                </Col>
               </Row>
                <p style={{color:"#8e918b"}} className="text6">
                se ultrices gravida. Risus commorra maecenas accumsan.
                </p>
            </Col>
            <Col data-aos="fade-left"lg={3}  md={6} sm={6} xs={12}>
               <Row>
                <Col lg={5} sm={5} xs={4}> <img src={Image3} width={120} alt="starting"></img> 
                </Col>
                <Col lg={7}  sm={7} xs={8}>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>03 <span style={{fontWeight:"500",fontSize:"15px"}}>Step</span></h4>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>Development</h4>
                </Col>
               </Row>
                <p style={{color:"#8e918b"}} className="text6">
                se ultrices gravida. Risus commorra maecenas accumsan.
                </p>
            </Col>
            <Col data-aos="fade-left" lg={3}  md={6} sm={6} xs={12}>
               <Row>
                <Col lg={5} sm={5} xs={4}> <img src={Image4} width={120} alt="starting"></img> 
                </Col>
                <Col lg={7}  sm={7} xs={8}>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>04 <span style={{fontWeight:"500",fontSize:"15px"}}>Step</span></h4>
                <h4  style={{"color":"#0a2351",fontWeight:'900'}}>Test & Launch</h4>
                </Col>
               </Row>
                <p style={{color:"#8e918b"}} className="text6"> 
                se ultrices gravida. Risus commorra maecenas accumsan.
                </p>
            </Col>
        </Row>
    </Container>
    
    <Card className="bg-dark mb-5 " >
      <Card.Img src={Image6} alt="Card image" className="image8"/>
      <Card.ImgOverlay>
      <div className="d-flex flex-column  align-items-center text-white " >
      
        <center>
      <Row className='text-white py-5' data-aos="fade-up">
      
         <h2 className='text-white fs-1 textt mb-5'>Have a Project Mind?</h2>
      
      </Row>
      <Button  data-aos="fade-up" variant="primary" className="py-3 px-4 custom-button1" style={{fontSize:"17px",fontWeight:'500'}}>Get Started</Button> 
      </center>
        </div>
      </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default Section9
