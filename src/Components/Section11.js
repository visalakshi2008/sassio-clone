import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/imag111.jpg";
import Image2 from "../assests/overlay2.jpg";
import Image3 from "../assests/overlay3.jpg";
import Image4 from "../assests/overlay4.jpg";
import { Carousel } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Image5 from "../assests/left.png";
import Image6 from '../assests/right.png';
import { useState,useRef } from 'react';
function Section11() {
  
//   const carouselButtonStyles = {
//     backgroundColor: 'white',
//     color:'white'
// };
const [index, setIndex] = useState(0);
const carouselRef = useRef();

const handleNext = () => {
  if (carouselRef.current) {
    carouselRef.current.next();
  }
};

const handlePrev = () => {
  if (carouselRef.current) {
    carouselRef.current.prev();
  }
};
  return (
    <div>
       <Container className="mb-5 mt-5 padding1"  id="blog">
        <Row>
            <Col lg={10}>
            <h5  data-aos="fade-right" style={{color:"blue"}}>Blog</h5>
            <h3  data-aos="fade-right" style={{"color":"#0a2351",fontWeight:'900'}} className="text3">Resource & latest news</h3>
            <p data-aos="fade-right" style={{ color: '#8e918b' }} className="text6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </Col>
            <Col>
            <img src={Image5} data-aos="zoom-in" className="animated"  width={40} onClick={handlePrev} alt="right-arrow"></img>  
    <img src={Image6} data-aos="zooom-in" width={40} onClick={handleNext} alt="left-arrow"></img>
            </Col>

        </Row>
        <Carousel interval={2000} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} ref={carouselRef} pause={false} wrap={true} keyboard={true}  >
     
        <Carousel.Item>
        <Row data-aos="fade-right">
            <Col lg={6} md={6} sm={12} xs={12} className='p-2' >
            
            <Card className="bg-dark text-white">
      <Card.Img src={Image1} alt="Card image" />
      <Card.ImgOverlay>
      <p >
         Software Development
        </p>
        <h3>Define world best It solution <br/> technology</h3>
        <p>Gouse Shaik -2023</p>
      </Card.ImgOverlay>
    </Card>            </Col>
            <Col lg={6} md={6} sm={12} xs={12}  data-aos="fade-up">
            <Card className="bg-dark text-white">
      <Card.Img src={Image2} alt="Card image" />
      <Card.ImgOverlay>
      <p>
        Web Design
        </p>
        <h3> you must try 20 secret of digital transform</h3>
      </Card.ImgOverlay>
    </Card>   
            <Row >
          
                <Col lg={6} md={12} sm={12} xs={12} className="py-2">
                <Card className="bg-dark text-white">
      <Card.Img src={Image3} alt="Card image" />
      <Card.ImgOverlay>
      <p>
      Web Design
        </p>
        <h5>Define world best It solution </h5>
      </Card.ImgOverlay>
    </Card>   
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="py-2 d-md-none d-block d-lg-block">
                <Card className="bg-dark text-white">
      <Card.Img src={Image4} alt="Card image" />
      <Card.ImgOverlay>
      <p>
         Software Development
        </p>
        <h5>Define world best It solution </h5>
      </Card.ImgOverlay>
    </Card>   
                </Col>
             
            </Row>
            </Col>
        </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row data-aos="fade-right">
            <Col lg={6} md={6} sm={12} xs={12} className='p-2' >
            
            <Card className="bg-dark text-white">
      <Card.Img src={Image1} alt="Card image" />
      <Card.ImgOverlay>
      <p>
         Software Development
        </p>
        <h3>Define world best It solution <br/> technology</h3>
        <p>Gouse Shaik -2023</p>
      </Card.ImgOverlay>
    </Card>            </Col>
            <Col lg={6} md={6} sm={12} xs={12}  data-aos="fade-">
            <Card className="bg-dark text-white">
      <Card.Img src={Image2} alt="Card image" />
      <Card.ImgOverlay>
      <p>
        Web Design
        </p>
        <h3> you must try 20 secret of digital transform</h3>
      </Card.ImgOverlay>
    </Card>   
            <Row >
          
                <Col lg={6} md={12} sm={12} xs={12} className="py-2">
                <Card className="bg-dark text-white">
      <Card.Img src={Image3} alt="Card image" />
      <Card.ImgOverlay>
      <p>
      Web Design
        </p>
        <h5>Define world best It solution </h5>
      </Card.ImgOverlay>
    </Card>   
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="py-2 d-md-none d-block d-lg-block">
                <Card className="bg-dark text-white">
      <Card.Img src={Image4} alt="Card image" />
      <Card.ImgOverlay>
      <p>
         Software Development
        </p>
        <h5>Define world best It solution </h5>
      </Card.ImgOverlay>
    </Card>   
                </Col>
             
            </Row>
            </Col>
        </Row>
        </Carousel.Item>
        </Carousel>
        </Container>

    </div>
  )
}

export default Section11
