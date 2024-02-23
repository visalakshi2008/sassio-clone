import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import Image5 from "../assests/bbg1.jpg";
import "../css/background.css";
import Image3 from "../assests/arrow.png";
import Image1 from "../assests/saas.jpg";
import Image2 from "../assests/saas1.jpg";
function Section4() {
  return (<>
  <Container fluid>
    <Card className="bg-dark mb-5 " id="portfolio">
    <Card.Img src={Image5} alt="Card image" className='height' />
    <Card.ImgOverlay>
    <Container className="mb-5">
    <div className="d-flex flex-column  align-items-center text-white " >
      <center>
    <Row className='text-white py-4' data-aos="fade-up">
       <h2 className='text-white fs-1'>Our latest portfolio for <br/> your business</h2>
       <p className="mt-4 text6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </Row>
    </center>
      </div>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Card  data-aos="fade-left">
   <div className="custom-card card-img-container">
   <div className="overlay"></div>
   <Card.Text className="text-overlay" style={{fontWeight:"900"}}>Social Medial App</Card.Text>
   <Card.Text className="text-overlay3"> Ideas / Knowlegde</Card.Text>
   <Card.Text className="custom-button" style={{fontWeight:"700"}}><img src={Image3} alt="arrow"></img></Card.Text>
<Card.Img variant="top" src={Image1} className="card-image" />

</div>
</Card>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Card data-aos="fade-left">
   <div className="custom-card card-img-container">
   <div className="overlay"></div>
   <Card.Text className="text-overlay" style={{fontWeight:"900"}}>Saas Software App</Card.Text>
   <Card.Text className="text-overlay3"> Ideas / Knowlegde</Card.Text>
   <Card.Text className="custom-button" style={{fontWeight:"700"}}><img src={Image3} alt="arrow"></img></Card.Text>
<Card.Img variant="top" src={Image2} className="card-image3" />

</div>
</Card>
          </Col>
        </Row>
        </Container>
    </Card.ImgOverlay>
  </Card>
  </Container>
  
  </>
  )
}

export default Section4
