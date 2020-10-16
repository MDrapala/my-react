import React from 'react';
import {
  Col,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavBar = () => (
  <Row>
    <Col>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MyMovies</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#action">Action</Nav.Link>
          <Nav.Link href="#aventure">Aventure</Nav.Link>
          <Nav.Link href="#horreur">Horreur</Nav.Link>
          <Nav.Link href="#comedie">Comédie</Nav.Link>
          <Nav.Link href="#signin">Sign-in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </Col>
  </Row>
);

export default NavBar;
