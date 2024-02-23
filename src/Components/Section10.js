import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from "../assests/image1.png";
import image2 from "../assests/image2222.png";
import image3 from "../assests/image3.png";
import image4 from "../assests/image4.png";
import { Row, Col ,Container} from 'react-bootstrap';

const BootstrapCarousel = () => {
  
  return (
    <div className='mb-5'>
          <center className='mb-5' >
          
           <h3  data-aos="fade-up"style={{"color":"#0a2351",fontWeight:'900'}} className="mb-4 text3">Our Partner</h3>
           <Col data-aos="fade-up" lg={5}>
               <p style={{color:"#8e918b"}} className="text6">incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra .</p>
               </Col>
        </center>
    <Container>
    <Carousel interval={2000} pause={false} wrap={true} keyboard={true} data-aos="fade-right">
      <Carousel.Item>
        <center>
        <Row>
          <Col xs={6} sm={6} md={3}  className="p-2">
            <img className="d-block w-75 h-75 card-shadow" src={image1} alt="First slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-blockw-75 h-75 card-shadow" src={image2} alt="Second slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-block w-50 w-75 h-75 card-shadow" src={image3} alt="Third slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-block w-75 h-75 card-shadow" src={image4} alt="Fourth slide" />
          </Col>
          
        </Row>
        </center>
      </Carousel.Item>
      <Carousel.Item>
        <center>
        <Row>
          <Col xs={6} sm={6} md={3}  className="p-2">
            <img className="d-block w-75 h-75 card-shadow " src={image1} alt="First slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-block w-75 h-75 card-shadow" src={image2} alt="Second slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-block w-75 h-75 card-shadow" src={image3} alt="Third slide" />
          </Col>
          <Col xs={6} sm={6} md={3} className="p-2">
            <img className="d-block w-75 h-75 card-shadow" src={image4} alt="Fourth slide" />
          </Col>
          
        </Row>
        </center>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  );
};

export default BootstrapCarousel;
