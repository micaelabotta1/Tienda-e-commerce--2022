// import { Navbar, NavDropdown } from "react-bootstrap" // trae toda la librería
import { NavLink, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import  Nav from "react-bootstrap/Nav"
import  Navbar from "react-bootstrap/Navbar"
import  NavDropdown from "react-bootstrap/NavDropdown"
import Widget from '../Widget/Widget'
import "./NavBar.css";



function NavBar() {
    //console.log(props)
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="menu-navegacion">
            <Container >
                <NavLink to='/'>React-Ecemmerce</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                    <NavLink to="categoria" >Remeras</NavLink>
                    <NavLink to="categoria">Gorras</NavLink>
                    
                </Nav>
                <Nav>
                    
                    <NavLink to='cart' className={({ isActive })=> isActive ? 'active' : ''} >
                        <Widget />
                    </NavLink >
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>
    
  )
}

export default NavBar

// className={({ isActive }) => (isActive ? "nav-active" : "")}