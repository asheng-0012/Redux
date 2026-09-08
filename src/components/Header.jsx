import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top py-2" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to={'/'} className="text-white text-decoration-none fw-bold"><FontAwesomeIcon icon={faTruckFast} />ECART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-2">
            <Nav.Item><input type="text" placeholder="Search..." className="form-control rounded-3" /></Nav.Item>
            <Nav.Item><Link to={'/wishlist'} className="text-white text-decoration-none fw-bold">Wishlist<Badge pill bg="light" text="dark">0</Badge></Link></Nav.Item>
            <Nav.Item><Link to={'/cart'} className="text-white text-decoration-none fw-bold">Cart<Badge pill bg="light" text="dark">0</Badge></Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header