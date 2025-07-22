import React from 'react'

import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './mynavbar'

import Offcanvas from 'react-bootstrap/Offcanvas';
function Mynavbar() {
  const expand="md"
  return (
    <>

        <Navbar key={expand} expand={expand} style={{backgroundColor:'#ccc'}} className=" mb-3">
          <Container >
            <Navbar.Brand href="#" className='Lalezar fs-4'>مقاله نویسی</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to='/'>صفحه اصلی </NavLink>
                  <NavLink className='nav-link' to='/add-artical'>ساخت مقاله</NavLink>
                  <NavLink className='nav-link' to='/about'>  در باره ما</NavLink>
                  
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  )
}

export default Mynavbar