import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap";

import Testimony from "./Testimony";

import JeremyRossImage from "../images/headshot-jeremy-ross.jpg";
import MikeSayenkoImage from "../images/headshot-mike-sayenko.jpg";
import MarkWestcottImage from "../images/headshot-mark-westcott.jpg";
import BenSernaGreyImage from "../images/headshot-ben-serna.jpg";
import SusanaSernaImage from "../images/headshot-susana-serna.jpg";
import DanielDrierImage from "../images/headshot-daniel-drier.jpg";
import MarkHartelImage from "../images/headshot-mark-hartel.jpg";
import MattDittmannImage from "../images/headshot-matt-dittmann.jpg";
import JessicaWallImage from "../images/headshot-jessica-wall.jpg";
import DonGilbertImage from "../images/headshot-don-gilbert.jpg";

const testimonials = [
    {
        name: 'Jessica Wall',
        imgSrc: JessicaWallImage,
        text: `I highly recommend Robert for his exceptional collaborative skills.
               His ability to seamlessly work with artists, sound designers, and game designers, combined with his open communication and adaptability,
               make him an invaluable member for any team. I am confident that Robert's collaborative spirit and commitment to excellence will continue to shine in future endeavors.`
    },
    {
        name: 'Don Gilbert',
        imgSrc: DonGilbertImage,
        text: `Robert showed great capability in his position at Acquia.
               He spearheaded several key initiatives for the Marketing Cloud business unit, seeing them through from concept to completion.
               These include OpenID Connect integration, inter-app API improvements, improvements to our test coverage,
               and enhancements to developer documentation which improved the working experience for many team members.`
    },
    {
        name: 'Daniel Drier',
        imgSrc: DanielDrierImage,
        text: `Robert is a skilled, hard-working engineer with an entrepreneurial mindset and strong communication skills.
               When we worked together, he was a technical leader who other engineers went to for direction and help,
               and he did a great job of mentoring and supporting them.
               He's consistently a joy to work with, and I've seen him overcome obstacles and succeed
               in a wide variety of technical projects and work environments.`
    },
    {
        name: 'Matt Dittmann',
        imgSrc: MattDittmannImage,
        text: `Robert is a very talented software engineer, who has shown a tremendous amount of growth in the time that I've known him.
               One of the things I remember most about working with Robert were the presentations he gave in our developer meetings,
               and how much he seemed to know even at that young age. He is a true fountain of knowledge.`
    },
    {
        name: 'Jeremy Ross',
        imgSrc: JeremyRossImage,
        text: `I've worked with Robert on a few projects now and I've been really impressed with his ability to take
               an idea to completion with very little oversight.
               He asks the right questions, and can be trusted to write great code code.`
    },
    {
        name: 'Mark Westcott',
        imgSrc: MarkWestcottImage,
        text: `My teaching career was at a standstill due to a long cancer battle.
               Robert created a beautiful website which almost immediately reignited interest in my performing and teaching reputation.
               I now receive numerous inquiries about my teaching and other activities and I am as busy as my schedule permits.`
    },
    {
        name: 'Susana Serna',
        imgSrc: SusanaSernaImage,
        text: `Robert does excellent work in a timely manner.
               Since they updated my clinic's web page, more patients have called to make appointments and mentioned the web page.`
    },
    {
        name: 'Mike Sayenko',
        imgSrc: MikeSayenkoImage,
        text: `It has been a pleasure to work with Robert.
               He's passionate, communicates very well, responsive, and honest.
               He documents well, has good constructive feedback, and is always looking for improvements in the process.
               I believe he has a very bright future ahead.`
    },
    {
        name: 'Ben Serna-Grey',
        imgSrc: BenSernaGreyImage,
        text: `Robert made the process of making my website easy.
               Everything is set up so I can easily update my portfolio, add blog posts, anything else I need.
               I'm glad I have a good-looking site I can direct people to now.`
    },
    {
        name: 'Mark Hartel',
        imgSrc: MarkHartelImage,
        text: `Robert faithfully implemented the club’s written requirements and we were very pleased with the results;
               the user experience on the new website is vastly improved over the previous website.
               Robert remained involved through 2018 to provide general technical support and implement enhancements requested by our users.
               Overall we were very happy with Robert’s technical expertise and professionalism and would definitely use his services in the future.`
    },
];

export default function Testimonials() {
    var settings = {
        className: "center",
        // centerMode: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        lazyLoad: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className={'bg-dark text-light pt-5 pb-5'}>
            <Container>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <Testimony
                            name={testimonial.name}
                            imgSrc={testimonial.imgSrc as string}
                            text={testimonial.text}
                        />
                    ))}
                </Slider>
            </Container>
        </section>
    );
}