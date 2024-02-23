import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image2 from "../assests/icon2.png";
import Image3 from "../assests/profile1.png";
import Image4 from "../assests/profile2.png";
import Image5 from "../assests/profile3.png";
import Image6 from "../assests/profile4.png";
import Image7 from "../assests/profile5.png";
import Image8 from "../assests/profile6.png";
import BackgroundPic from "../assests/back.jpg";
import Background from "../assests/background.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
import 'aos/dist/aos.css';

function CollapsibleExample( { scrollToSection }) {
  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: 'ease-in-out',
    });
  }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (<>

    <Navbar collapseOnSelect expand="lg" data-aos="fade-up">
      <Container>
        <Navbar.Brand href="#home" style={{"color":"#0a2351",fontWeight:'900',fontSize:'32px'}}>SaaSio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto ">
            <Nav.Link href="/"className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}} onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")} className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}}  onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")}  className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}} onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("portfolio")}  className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}} onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>Portfolio</Nav.Link>
            <Nav.Link  onClick={() => scrollToSection("pricing")} className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}} onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>Pricing</Nav.Link>
            <Nav.Link  onClick={() => scrollToSection("blog")} className="px-4" style={{color:"#0a2351",fontWeight:"500",fontSize:"19px"}} onMouseEnter={(e) => e.target.style.color = "blue"}  onMouseLeave={(e) => e.target.style.color = "#0a2351"}>Blog</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link onClick={handleShow} className="px-4"><img src={Image2} width={45} alt="side-bar-button"></img></Nav.Link>
           <Nav.Link className="px-4">  <Button variant="primary" className="custom-button1 animated2" >Get in Touch</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <center> <h2 className='mb-5' style={{"color":"#0a2351",fontWeight:'900',fontSize:'40px'}}>SaaSio</h2></center>
      <p className='px-4 mb-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumyert et eirmod tempor invidunt ut labore et ert dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et cer justo duo dolores et berr ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
     <center className="mb-3"> <img  src={Image3} className="p-2" alt="pic1"></img>   <img  src={Image4} className="p-2" alt="pic1"></img>   <img  src={Image5} className="p-2"  alt="pic1"></img>   <img   className="p-2" src={Image6} alt="pic1"></img>   <img  className="p-2" src={Image7} alt="pic1"></img>   <img  src={Image8}  className="p-2" alt="pic1"></img>
      </center> 
      <h3 style={{"color":"#0a2351",fontWeight:'900',fontSize:'22px'}}>Follow us on</h3>
       </Offcanvas.Body>
      </Offcanvas>
<Container fluid>
      <Card className=" text-black mb-5">
      <Card.Img src={BackgroundPic} alt="Card image" className="image1"/>
    
      <Card.ImgOverlay>
      <Container>
          <Row className='mt-5'>
            <Col lg={6} md={12} sm={12}>
            <p className="mb-3 text1 animated-text" style={{color:"#0a2351",fontWeight:"600"}}>We Are Software Development Company</p>
        <p className="text5" style={{color:"#0a2351",fontWeight:"500"}} data-aos="fade-up">
        We are a leading software development company, dedicated to crafting innovative solutions that empower businesses to thrive in the digital age. 
        </p>
        <Row>
       <Col lg={4} md={3} sm={4} xs={6} data-aos="zoom-in" ><Button variant="primary" className="py-3 px-3 custom-button1 animated2" style={{fontWeight:'500'}}>How It Work</Button></Col> 
       <Col lg={4} md={6} sm={4} xs={6} data-aos="zoom-in">
       <Button variant="primary" className="py-3 px-3 custom-button2 animated2" style={{fontWeight:'500'}}>IT Services</Button>
       </Col>  
       </Row>
            </Col>
            <Col data-aos="fade-right" lg={6} md={12} sm={12} xs={12}>
            <img src={Background} className="image2"  alt="backPie"></img>
            </Col>
          </Row>
          </Container>
      </Card.ImgOverlay>
    </Card>
    </Container>
    </>
  );
}

export default CollapsibleExample;
