import apiDeputados from '@/services/apiDeputados'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const NavbarPrincial = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Deputados Online</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            <Nav.Link href="/partidos">Partidos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarPrincial