import * as React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Github, Linkedin, EnvelopeAtFill } from 'react-bootstrap-icons';
import { StaticImage } from "gatsby-plugin-image";

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <StaticImage  className={"d-inline-block align-text-top me-2"} src="../images/favicon.png" alt="Logo for roboparker" width={24} height={24}/>
                    Roboparker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/in/roboparker" target="_blank"><Linkedin className='mb-1' /> LinkedIn</Nav.Link>
                        <Nav.Link href="https://github.com/roboparker" target="_blank"><Github className='mb-1' /> GitHub</Nav.Link>
                        <Nav.Link href="mailto:roboparker@proton.me"><EnvelopeAtFill className='mb-1' /> Email</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar