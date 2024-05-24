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
    height: 100%;

    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.175);
    
    &.border-start {
        border-left-width: 16px !important;
    }
`;

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ text, imgSrc, name }) => {
    return (
        <div className={'p-3 mt-0 h-100'}>
            <StyledBlockquote className={'border-start border-primary p-4 position-relative bg-light text-dark shadow-sm'}>
                <StyledDiv className={'text-center'}>
                    <img className={'rounded-circle m-auto mb-2 shadow border border-1'} src={imgSrc} alt={`Photo of ${name}`} width={'128px'} height={'128px'} />
                    <cite className={'d-inline-block m-auto h4 mb-4 text-primary'}>{name}</cite>
                </StyledDiv>
                <p className={'mb-0'}>{text}</p>
            </StyledBlockquote>
        </div>
    );
};

export default TestimonialSlide;