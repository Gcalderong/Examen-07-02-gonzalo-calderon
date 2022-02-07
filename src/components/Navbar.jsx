import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fas fa-user-graduate" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navbar;
