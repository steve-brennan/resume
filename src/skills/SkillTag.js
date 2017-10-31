import React from 'react';
import styled from 'styled-components';

const SkillTag = styled.span`
    background-color: green;
    border-radius: 3px;
    color: white;
    height: 30px;
    line-height: 30px;
    padding: 0 20px 0 25px;
    margin: 0 10px 10px 0;

`

function SkillTagDisplay(props) {

    return (
        <SkillTag className="skill-tag">{props.name}</SkillTag>
    )
}

export {SkillTagDisplay}