import {Navbar, Nav, NavDropdown, Row, Col, Container} from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
    <Container>
    
  <Navbar.Brand href="#home" className="text-white"><h3>Strive Jobs</h3> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-white">Favorites</Nav.Link>
      
      <NavDropdown title="Search by" id="basic-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">Job title</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Company</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Category</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}

export default NavBar