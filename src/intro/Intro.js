import React, { Component } from 'react';
import styled from 'styled-components';

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

const IntroLogo = styled.h1`
    text-align: center;
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: 20px;
    margin: 0 auto;
    color: white;
    font-style: italic;

`

class Intro extends Component {

    render() {
        return (
            <IntroSection className="intro-section">
                <IntroHeading>Steve Brennan</IntroHeading>
                <IntroSubHeading>Web Developer</IntroSubHeading>
                <br/>
                <br/>
                <IntroLogo>Design a little => Build a little => Test a little</IntroLogo>
            </IntroSection>
        );
    }
}

export default Intro;