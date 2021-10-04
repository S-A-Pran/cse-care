import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        {/* used react bootstrap nav bar */}
            <Navbar bg="dark" variant="light">
                <Container>
                    <NavLink className="fw-bold p-3 bg-info text-dark rounded-circle text-decoration-none" to="/home">
                        CSE-Care
                    </NavLink>
                <Nav className="ms-auto">
                    <NavLink activeStyle={{fontWeight: "bold",color: "red"}} className="text-decoration-none text-white fs-4 pe-5" to="/home">Home</NavLink>
                    <NavLink activeStyle={{fontWeight: "bold",color: "white"}} className="text-decoration-none text-white fs-4 pe-5" to="/services">Services</NavLink>
                    <NavLink activeStyle={{fontWeight: "bold",color: "white"}} className="text-decoration-none text-white fs-4 pe-5" to="/Faq">Faq</NavLink>
                    <NavLink activeStyle={{fontWeight: "bold",color: "white"}} className="text-decoration-none text-white fs-4" to="/About">About</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;