import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/side-image.png";
import Button from "react-bootstrap/Button"
function Section8() {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);

  const toggleContent1 = () => {
    setShowContent1(!showContent1);
  };

  const toggleContent2 = () => {
    setShowContent2(!showContent2);
  };

  const toggleContent3 = () => {
    setShowContent3(!showContent3);
  };

  return (
    <div className="bg-body-tertiary mt-5 mb-5">
      <Container>
        <Row>
            <Col>
            <h5  data-aos="fade-up" style={{color:"blue",paddingTop:"50px"}}>FAQ</h5>
       <h3   data-aos="fade-up" style={{"color":"#0a2351",fontWeight:'900'}} className="text3">Frequently Asked Questions</h3>
            <p  data-aos="fade-up"style={{color:"#8e918b"}}  className="text6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <Row  data-aos="fade-up">
                <p className="dark text-white py-3 px-3">
                  1. Can you explain what are the steps of marketing research?  
                 <span className='px-3'><Button className=' btn px-3' style={{fontWeight:"800"}} variant="outline-light" onClick={toggleContent1}>
                    {showContent1 ? "-" : "+"}
                  </Button></span>
                </p>
                {showContent1 && (
                  <p className="px-5"  style={{color:"#8e918b"}}>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don’t look even
                    slightly believable.
                  </p>
                )}
              </Row>
              <Row  data-aos="fade-up">
                <p className="dark text-white py-3 px-3">
                2. In my financial marketing loss can i get insuarance ?
                <span className='px-3'><Button className=' btn px-3'style={{fontWeight:"800"}} variant="outline-light" onClick={toggleContent2}>
                    {showContent1 ? "-" : "+"}
                  </Button></span>
                </p>
                {showContent2 && (
                  <p className="px-5" style={{color:"#8e918b"}}>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                  </p>
                )}
              </Row>
              <Row   data-aos="fade-up">
                <p className="dark text-white py-3 px-3">
                3. How I can contact with your advisor in strategic issue?
                <span className='px-3'><Button className=' btn px-3' style={{fontWeight:"800"}} variant="outline-light" onClick={toggleContent3}>
                    {showContent1 ? "-" : "+"}
                  </Button></span>
                </p>
                {showContent3 && (
                  <p className="px-5" style={{color:"#8e918b"}}>
                   There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                  </p>
                )}
              </Row>
            </Col>
            <Col className="mt-5"  data-aos="fade-left">
            <img src={Image1} alt="section8pie" className="image3"></img>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section8;
