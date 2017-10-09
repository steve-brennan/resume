import React, { Component } from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';

const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.primaryColor};
    height: 100%;
    margin-bottom: -10px;
    flex: 2;
`;

const IntroHeading = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: 50px;
    margin: 0 auto;
    color: white;
`;

const IntroSubHeading = styled.h2`
    text-align: center;
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: 30px;
    margin: 0 auto;
    color: white;
`


class Intro extends Component {

    render() {
        return (
            <IntroSection className="intro-section">
                <IntroHeading>Steve Brennan</IntroHeading>
                <IntroSubHeading>Web Developer</IntroSubHeading>
            </IntroSection>
        );
    }
}

export default Intro;