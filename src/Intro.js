import React, { Component } from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'grid-styled';

const IntroSection = styled.section`
    background-color: #42d9f4;
    height: 100%;
    margin-bottom: -100px;
    flex: 2;
`;

const IntroTitle = styled.h1`
    width: 200px;
    margin: 0 auto;
    color: white;
`;


class Intro extends Component {

    render() {
        return (
            <IntroSection className="IntroSection">
                <IntroTitle>Intro</IntroTitle>
            </IntroSection>
        );
    }
}

export default Intro;