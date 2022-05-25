import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Outlet} from 'react-router-dom'
import Scroll from 'react-scroll'


export interface ILayoutComponentProps {}

const LayoutComponent: React.FunctionComponent<ILayoutComponentProps> = props =>{
    return <div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand >Herru Li</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="./about">About</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="/PageOne">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Outlet />
    </div>
}

export default LayoutComponent