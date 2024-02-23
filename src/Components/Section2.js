import React from 'react'
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/card1.jpg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image2 from "../assests/consultancy-.png";
import Image3 from "../assests/product.png";
import Image4 from "../assests/cloud-service-64.png";
import Image5 from "../assests/icon1.png";
import Image6 from "../assests/webdevelopemnet.png";
function Section2() {
  return (
    <div className="bg-body-tertiary" id="services">
    <center className='mb-5' data-aos="fade-up">
       <h5  style={{color:"blue",paddingTop:"50px"}}>Service</h5>
       <h3 style={{"color":"#0a2351",fontWeight:'900'}} className="text3">What service we are providing?</h3>
       <Col lg={7}>
            <p style={{color:"#8e918b"}} className="text6" >dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliquaQuis ipsum suspendisse ultrices gravida. </p>
            </Col>
    </center>
    <Container>
    <Row>
        <Col lg={4} md={6} sm={6} xs={12}  className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top" src={Image1} style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >IT Consultancy</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}}>
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
    <h6 style={{color:"#FF1694"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top"  src={Image2}  style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >Business Consultancy</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}}>
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  </p>
    <h6 style={{color:"#0051ff"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top"  src={Image3} style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >Product Design</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}}>
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
    <h6 style={{color:"#37746e"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top"  src={Image4}  style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >cloud service</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}} >
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
    <h6 style={{color:"#3fe016"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top"  src={Image5}  style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >It management</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}} >
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
    <h6 style={{color:"#38d9eb"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className="mb-5" data-aos="fade-up" >
        <Card  style={{ width: '100%'}} className='back2 card-shadow animated2'>
    <center>  
        
    <Card.Img variant="top"  src={Image6}  style={{width:"25%",paddingTop:"25px"}} />
      <Card.Body>
        <Card.Title><h4 style={{"color":"#0a2351",fontWeight:'900',fontSize:'25px'}} >web development</h4></Card.Title>
        <p style={{padding:"10px",color:"#8e918b"}}>
        ut labore et dolore magna aliqua. se ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
        </p>
    <h6 style={{color:"#593773"}}>Learn More </h6>
      </Card.Body>
      </center>
    </Card>
        </Col>
    </Row>
    <center>
      <Button data-aos='zoom-in'  className="p-3 mb-5 custom-button1 animated1" >Load More</Button>
    </center>
    </Container>
  </div>


    )
}

export default Section2
