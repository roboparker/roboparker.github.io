import * as React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Icon from '../images/favicon.png'

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img  className={"d-inline-block align-text-top me-2"} src={Icon as string} alt="Logo for roboparker" width={24} height={24}/>
                    Roboparker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/in/roboparker" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Nav.Link>
                        <Nav.Link href="https://github.com/roboparker" target="_blank"><FontAwesomeIcon icon={faGithub} /> GitHub</Nav.Link>
                        <Nav.Link href="mailto:roboparker@proton.me"><FontAwesomeIcon icon={faEnvelope} /> Email</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar