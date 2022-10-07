import React, { useState, useEffect } from 'react'
import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo (1).png';

const Navigationbar = () => {
  const [header, setHeader] = useState("header")
  
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header")
    } else if (window.scrollY > 70) {
      return setHeader("headeractive")
    } 
  }
  
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
    return (
      <div>
         <section className={header}>
        <div className="container ">
            <div class="row">
                <div className="col">
        <Navbar fixed="top" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" srcset=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav  className="nav-item">
            <Nav.Link  href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Review">Review</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#link"><i class="bi bi-search"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                  </div>
                </div>
            </div> 
    </section>
      </div>
    );
    }
    
    export default Navigationbar;