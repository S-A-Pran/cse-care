import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        /* using flex the footer designed. bootstrap used*/
        <div className="bg-dark text-white">
            <Container className="d-flex justify-content-evenly pt-2 pb-3">
                <div className="d-flex flex-column">
                    <h4>Features</h4>
                    <Link className="text-decoration-none text-white" to="/home">Home</Link>
                    <Link className="text-decoration-none text-white" to="/about">About</Link>
                    <Link className="text-decoration-none text-white" to="/services">Services</Link>
                    <Link className="text-decoration-none text-white" to="/faq">Faq</Link>
                </div>
                <div>
                    <h4>Address</h4>
                    <p>102/12 Cantonment</p>
                    <p>Dhaka 1206</p>
                    <p>Bngladesh</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>phone: 0177777777</p>
                    <p>email: csecare@gmail.com</p>
                    <p>facebook: CSE Care</p>
                </div>
            </Container>
            <h4 className="text-center"> &copy; Copyright 2020-2030</h4>
            <p className="text-center text-muted pb-2 mb-0">All Rights Reserved. Powered by SAP</p>
        </div>
    );
};

export default Footer;