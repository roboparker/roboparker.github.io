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
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://www.bsnsports.com/" title={'BSN Sports Art Locker'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-bsnsports.png" alt="BSN Sports Art Locker Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://www.acquia.com/products/acquia-campaign-studio" title={'Campaign Studio'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-campaign-studio.png" alt="Campaign Studio Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://www.aphmeow.com/" title={'Aphmau'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-aphmau-2017-04-16.png" alt="Aphmau Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://bushcooking.com/" title={'Bush Cooking'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-bush-cooking-2017-04-16.png" alt="Bush Cooking Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://www.firstmovechess.org/" title={'First Move'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-firstmove-2017-10-13.png" alt="First Move Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <a className={'d-block mb-4'} href="https://www.firstmovechess.org/" title={'Seattle City Club'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-seattlecityclub.png" alt="Seattle City Club Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio