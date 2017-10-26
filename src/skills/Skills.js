import React, { Component } from 'react';
import styled from 'styled-components';
import {SkillTagDisplay} from './SkillTag';
import {SkillViewDisplay} from './Skill';

const SkillsSection = styled.section`
    margin: 0 auto;
    width: 100%;
    height: inherit;
`;

const SkillsView = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
`;

class Skills extends Component {

    render() {
        return (
            <SkillsView>
                <SkillViewDisplay/>
                <SkillViewDisplay/>
            </SkillsView>
        );
    }
}

export default Skills;