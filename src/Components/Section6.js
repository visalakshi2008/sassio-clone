import React from 'react'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image1 from "../assests/basic1.png";
import Image2 from "../assests/basic2.png";
import Image3 from "../assests/basic3.png";
import Button from "react-bootstrap/Button";

function Section6() {
  return (
    <div className="bg-body-tertiary mb-5" id="pricing">
    <center data-aos="fade-up" className='mb-5'>
       <h5   style={{color:"blue",paddingTop:"50px"}}>Pricing Plan</h5>
       <h3 style={{"color":"#0a2351",fontWeight:'900'}} className="text3">Our Awesome pricing</h3>
       <Col lg={7}>
            <p  style={{color:"#8e918b"}} className="text6">suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan gravida lacus vel facilisis. </p>
            </Col>
    </center>
    <Container>
    <Row data-aos="fade-up" className="mb-5">
        <Col className='mb-3' lg={4} md={6} sm={12}>
        <Card  style={{ width:"100%" }} className="card-shadow">
      <Card.Body className='mb-3'>
       <center className='mb-4'><p style={{fontWeight:"900",fontSize:"23px",color:"#0a2351"}}>Basic Plan</p>
       </center> 
       
        <center className='mb-2'>
        <div style={{background:"white",color:"#0a2351"}} className="mb-3">
   <h1 style={{"fontWeight":"900"}}>59$/ <span style={{"font-size":"20px",fontWeight:"700"}}>Month</span> </h1> 
       </div>
      <img src={Image1} className="mb-4" alt="cloud-upload" width={100}></img>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">30 days trial features</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Synced to cloud database</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">10 Hours of support</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Social Media integration</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Unlimited features</p>
      <Button variant="primary" className="py-3 px-4 custom-button1 animated2" style={{fontSize:"17px",fontWeight:'500'}}>Choose Plan</Button>  
        </center>
      
     
      </Card.Body>
     
    </Card>
        </Col>
        <Col className='mb-3' lg={4} md={6} sm={12}>
        <Card  style={{ width:"100%" }} className="card-shadow">
      <Card.Body className='mb-3'>
       <center className='mb-4'><p style={{fontWeight:"900",fontSize:"23px",color:"#0a2351"}}>Basic Plan</p>
       </center> 
       
        <center className='mb-2'>
        <div style={{background:"white",color:"#0a2351"}} className="mb-3">
   <h1 style={{"fontWeight":"900"}}>59$/ <span style={{"font-size":"20px",fontWeight:"700"}}>Month</span> </h1> 
       </div>
      <img src={Image2} className="mb-4" alt="cloud-upload" width={100}></img>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">30 days trial features</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Synced to cloud database</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">10 Hours of support</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Social Media integration</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Unlimited features</p>
      <Button variant="primary" className="py-3 px-4 custom-button1 animated2" style={{fontSize:"17px",fontWeight:'500'}}>Choose Plan</Button>  
        </center>
      </Card.Body>
    </Card>
        </Col>
        <Col className='mb-3' lg={4} md={6} sm={12}>
        <Card  style={{ width:"100%" }} className="card-shadow">
      <Card.Body className='mb-3'>
       <center className='mb-4'><p style={{fontWeight:"900",fontSize:"23px",color:"#0a2351"}}>Basic Plan</p>
       </center> 
       
        <center className='mb-2'>
        <div style={{background:"white",color:"#0a2351"}} className="mb-3">
   <h1 style={{"fontWeight":"900"}}>59$/ <span style={{"font-size":"20px",fontWeight:"700"}}>Month</span> </h1> 
       </div>
      <img src={Image3} className="mb-4" alt="cloud-upload" width={100}></img>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">30 days trial features</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Synced to cloud database</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">10 Hours of support</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Social Media integration</p>
      <p style={{color:"#8e918b",fontSize:"17px"}} className="mb-4">Unlimited features</p>
      <Button variant="primary" className="py-3 px-4 custom-button1 animated2" style={{fontSize:"17px",fontWeight:'500'}}>Choose Plan</Button>  
        </center>
      </Card.Body>
    </Card>
        </Col>
        </Row>
  </Container>
    </div>
  )
}

export default Section6
