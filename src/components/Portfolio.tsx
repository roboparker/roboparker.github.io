import * as React from "react"
import {Container, Row, Col} from "react-bootstrap";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const StyledSection = styled.section`
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 1);
`;

const Portfolio: React.FC = () => {
    return (
        <StyledSection className="bg-secondary pt-5 pb-5">
            <Container>
                <h2>Portfolio</h2>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.bsnsports.com/" title={'BSN Sports Art Locker'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-bsnsports.png" alt="BSN Sports Art Locker Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.acquia.com/products/acquia-campaign-studio" title={'Campaign Studio'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-campaign-studio.png" alt="Campaign Studio Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.hangrykits.com/" title={'Hangry Kits'} target={'_blank'}>
                            <StaticImage src='../images/portfolio-thumb-hangry-2017-04-16.png' alt="Hangry Kits Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.aphmeow.com/" title={'Aphmau'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-aphmau-2017-04-16.png" alt="Aphmau Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://bonsaimirai.com/" title={'Bonsai Mirai'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-bonsaimirai-2015-01-08.png" alt="Bonsai Mirai Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://bushcooking.com/" title={'Bush Cooking'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-bush-cooking-2017-04-16.png" alt="Bush Cooking Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.firstmovechess.org/" title={'First Move'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-firstmove-2017-10-13.png" alt="First Move Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <a className={'d-block mb-4 shadow'} href="https://www.firstmovechess.org/" title={'Seattle City Club'} target={'_blank'}>
                            <StaticImage src="../images/portfolio-thumb-seattlecityclub.png" alt="Seattle City Club Screen Shot" className="img-fluid" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    )
}

export default Portfolio