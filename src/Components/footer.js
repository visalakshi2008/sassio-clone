import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from 'react-bootstrap';
import Icon1 from "../assests/email.png";
import Icon2 from "../assests/home.png";
import Icon3 from "../assests/phone.png";


function footer() {
  return (
    <Container className="mb-5">
        <center data-aos="fade-up">
            <h3 style={{ color: '#0a2351', fontWeight: '900', fontSize: '35px' }} className="mb-5">
                SaaSio
            </h3>
        </center>
        <Row>
            <Col data-aos="fade-up" lg={3} md={4} sm={6} xs={6}>
            <h3 style={{ color: '#0a2351', fontWeight: '600', fontSize: '26px' }} className="mb-4">Navigation</h3>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Home</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">About</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Service</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Project</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Blog</Nav.Link>

            </Col>
            <Col data-aos="fade-up" lg={3} md={4} sm={6} xs={6}>
            <h3 style={{ color: '#0a2351', fontWeight: '600', fontSize: '26px' }} className="mb-4">Solution</h3>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Responsible Disclosure</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Content Strategy</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">PPC Mangement</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Social Media marketing</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Intergration</Nav.Link>

            </Col>
            <Col data-aos="fade-up" lg={3} md={4} sm={6} xs={6}>
            <h3 style={{ color: '#0a2351', fontWeight: '600', fontSize: '26px' }} className="mb-4">Product</h3>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">IT Consultency</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Product Design</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Business Consultancy</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Web Development</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2">Cloud Service</Nav.Link>

            </Col>
            <Col data-aos="fade-up" lg={3} md={4} sm={6} xs={6}>
            <h3 style={{ color: '#0a2351', fontWeight: '600', fontSize: '26px' }} className="mb-4">Contact</h3>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2"><img width={20} alt='icon1' src={Icon1}></img> saasio@support.com</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2"><img width={20} alt='icon2'  src={Icon3}></img>+3255 456 789</Nav.Link>
            <Nav.Link style={{ color: '#0a2351'}} className="mb-2"><img src={Icon2}alt='icon3'  width={20} ></img>1700 W Blanke St, kiyev port south USA, America</Nav.Link>
            </Col>
        </Row>
    </Container>
  )
}

export default footer
