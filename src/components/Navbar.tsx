import * as React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Github, Linkedin, EnvelopeAtFill, Twitter, Twitch, Cloud } from 'react-bootstrap-icons';
import { StaticImage } from "gatsby-plugin-image";

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <StaticImage  className={"d-inline-block align-text-top me-2"} src="../images/favicon.png" alt="Logo for roboparker" width={24} height={24}/>
                    Roboparker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.linkedin.com/in/roboparker" target="_blank"><Linkedin className='mb-1' /> LinkedIn</Nav.Link>
                        <Nav.Link href="https://bsky.app/profile/roboparker.bsky.social" target="_blank"><Cloud className='mb-1' /> BlueSky</Nav.Link>
                        <Nav.Link href="https://x.com/robo_parker" target="_blank"><Twitter className='mb-1' /> Twitter</Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/roboparker" target="_blank"><Twitch className='mb-1' /> Twitch</Nav.Link>
                        <Nav.Link href="https://github.com/roboparker" target="_blank"><Github className='mb-1' /> GitHub</Nav.Link>
                        <Nav.Link href="mailto:roboparker@proton.me"><EnvelopeAtFill className='mb-1' /> Email</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar