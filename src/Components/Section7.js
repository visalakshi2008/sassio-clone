import React, { useRef } from 'react';
import { Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import Image1 from "../assests/map.jpg";
import Image3 from "../assests/left.png";
import Image4 from '../assests/right.png';
import Star from "../assests/5-star.jpg";
import Image6  from "../assests/card11.png";
import Image7 from "../assests/profile3.jpg";


function Section7() {
  const carouselRef = useRef(null);

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
  return(
<Card className=" text-white mt-5 mb-5" data-aos="fade-right">
      <Card.Img src={Image1} alt="Card image" className='image7'/>
      <Card.ImgOverlay>
        <Container>
            <Row className="mt-5 mb-5">
                <Col lg={5} md={5}>
                <Carousel   ref={carouselRef} interval={2000} pause={false} wrap={true} keyboard={true}>
      <Carousel.Item className="card-shadow">
                <Card > 
                    <Row>
                        <Col lg={3} sm={4} xs={5}>
                        <img src={Image6} width={150} alt="profile-pic"></img>
                        </Col>
                        <Col lg={9} sm={8} xs={7}>
                        <h5 className='mt-5' style={{fontWeight:"700",color:"#0a2351"}}>William Mojika</h5>
                        <p style={{color:"#0a2351"}}>Managing Director</p>
                        <img src={Star} width={100} style={{paddingTop:"0px"}} alt="star"></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{color:"#8e918b",padding:"10px"}} className="text6" > Our support team will get assistance from AI-powered suggetsions, making  it quicker than ever to handle requests</p> 
                    </Col>
                    </Row>
                </Card>
                </Carousel.Item>
             
                <Carousel.Item className="card-shadow">
                <Card>
                    <Row>
                        <Col lg={3} sm={4} xs={5}>
                        <img src={Image7} width={90} alt="profile-pic"></img>
                        </Col>
                        <Col lg={9}  sm={8} xs={7}>
                        <h5  style={{fontWeight:"700",color:"#0a2351"}}>William </h5>
                        <p style={{color:"#0a2351"}}>Software Engineer</p>
                        <img src={Star} width={100} style={{paddingTop:"0px"}} alt='star1'></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{color:"#8e918b",fontSize:"17px",padding:"10px"}} > Our support team will get assistance from AI-powered suggetsions, making  it quicker than ever to handle requests</p> 
                    </Col>
                    </Row>
                </Card>
                </Carousel.Item>
                </Carousel>
                </Col>
                <Col lg={7} md={7}>
                <h5  data-aos="fade-left" style={{color:"blue"}}>Testimonials</h5>
       <h3 data-aos="fade-left" style={{"color":"#0a2351",fontWeight:'900'}} className="text3">What Our client say?</h3>
            <p  data-aos="fade-left" className='text6' style={{color:"#8e918b",padding:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
               <img src={Image3} data-aos="zoom-in"  width={40} onClick={handleNext} alt="right-arrow"></img>   <img src={Image4} data-aos="zooom-in" width={40} onClick={handlePrev} alt="left-arrow"></img>
                </Col>
            </Row>
        </Container>
      </Card.ImgOverlay>
    </Card>

  )}

export default Section7;