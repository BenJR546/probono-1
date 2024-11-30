import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";

const CustomNavbar = () => {
    return (
        <Navbar
            expand="lg"
            variant="dark"
            style={{
                background: "linear-gradient(90deg, teal, #2196f3, #ff5722)",
                color: "white",
            }}
        >
            <Container>
                <Navbar.Brand
                    href="/"
                    style={{
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
                    }}
                >
                    ME/CFS/FM Support Group
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="/"
                            style={{
                                color: "white",
                                fontWeight: "500",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown
                            title="Support"
                            id="support-dropdown"
                            menuVariant="dark"
                            style={{
                                color: "white",
                                fontWeight: "500",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <NavDropdown.Item href="/support">
                                Support Meetings
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/zoom-chat">
                                Zoom Chat from Home
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/cafe-clubs">
                                Cafe Clubs
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/facebook-group">
                                Facebook Group
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Resources"
                            id="resources-dropdown"
                            menuVariant="dark"
                            style={{
                                color: "white",
                                fontWeight: "500",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <NavDropdown.Item href="/conditions">
                                Conditions
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/awareness">
                                Awareness Day & Month
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/self-help-program">
                                Self-Help Program
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="/about"
                            style={{
                                color: "white",
                                fontWeight: "500",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            href="/contact"
                            style={{
                                color: "white",
                                fontWeight: "500",
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
