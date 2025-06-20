import * as React from "react"
import {Container, Row, Col} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby";

const Portfolio: React.FC = () => {
    return (
        <div className="bg-primary text-white pt-5 pb-5">
            <Container>
                <h2>Portfolio</h2>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Link to="/lanternal" className={'d-block mb-4'} title={'Lanternal'} target={'_blank'}>
                            <StaticImage src="../images/lanternal-title.png" alt="title artwork for lanternal game jam game" className="img-fluid" />
                        </Link>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Link to="/i-wet-my-plants" className={'d-block mb-4'} title={'I-wet-my-plants'} target={'_blank'}>
                            <StaticImage src="../images/i-wet-my-plants-title.png" alt="title artwork for I wet my plants game jam game" className="img-fluid" />
                        </Link>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Link to="/fractured-souls" className={'d-block mb-4'} title={'Fractured Soul'} target={'_blank'}>
                            <StaticImage src="../images/fractured-soul-title.jpg" alt="title artwork for fractured Soul game jam game" className="img-fluid" />
                        </Link>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Link to="/i-must-rest" className={'d-block mb-4'} title={'I Must Rest'} target={'_blank'}>
                            <StaticImage src="../images/i-must-rest-gameplay-screenshot-1.png" alt="title artwork for I Must Rest game jam game" className="img-fluid" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio