import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function TextLinkExample() {
  return (
    <Navbar style={{background:" #0a2351"}} className="d-none d-lg-block py-0" >
      <Container className="py-1">
        <Navbar.Brand href="#home" style={{"fontSize":"16px"}} className="text-white">SaaSio-IT Solutions Multipurpose WordPress theme</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" style={{color:'white',gap:'5px'}}>
          <Nav.Link style={{color:'white',}}>
             Register  </Nav.Link> <Nav.Link style={{color:'white',gap:'5px'}}> |</Nav.Link><Nav.Link style={{color:'white'}}> Login 
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;