import React, { Component } from 'react';
import styled from 'styled-components';
import {SkillTagDisplay} from './SkillTag';
import {SkillViewDisplay} from './Skill';
import {getSkillsIfNeeded} from '../actions';
import {connect} from 'react-redux';

const SkillsSection = styled.section`
    margin: 0 auto;
    width: 100%;
    height: inherit;
`;

const SkillsView = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    justify-content: flex-start;

    align-content: flex-start;

`;

function SkillsDisplay(props) {
    let skills = props.skills;
    let skillSet = skills.map((skill) => {
        return (
            <SkillViewDisplay
                key={skill.id}
                name={skill.data().name}
                category={skill.data().category}
                usageRecencey={skill.data().usageRecencey}
                usageTotal={skill.data().usageTotal}
            
            />
        )
    });
    return (
        <SkillsView className="skills=view">{skillSet}</SkillsView>
    );
}

class Skills extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getSkillsIfNeeded());
    }

    render() {
        const {skills} =  this.props;
        return (
            <SkillsDisplay skills={skills}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Skills);