import React from 'react';
import styled from 'styled-components';

type TestimonialSlideProps = {
    text: string;
    imgSrc: string;
    name: string;
};

const StyledDiv = styled.div`
    left: -5px;
    top: calc(100% - 64px);
`;

const StyledBlockquote = styled.blockquote`
    margin-bottom: 128px;
    height: calc(100% - 128px);
`;

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ text, imgSrc, name }) => {
    return (
        <div className={'m-3 mt-0 h-100'}>
            <StyledBlockquote className={'border-start border-5 border-primary p-4 p-md-5 position-relative bg-white text-black'}>
                <p className={'pb-5'}>{text}</p>
                <StyledDiv className={'position-absolute text-center'}>
                    <img className={'rounded-circle border border-4 border-primary mb-2'} src={imgSrc} alt={`Photo of ${name}`} width={'128px'} height={'128px'} />
                    <cite className={'d-inline-block m-auto text-white'}>{name}</cite>
                </StyledDiv>
            </StyledBlockquote>
        </div>
    );
};

export default TestimonialSlide;