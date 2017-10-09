import React, { Component } from 'react';
import styled from 'styled-components';

const TimelineDisplay = styled.div`
    margin: 0 auto;
    flex: 2 2 auto;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`;

const TimelineItemBufferLeft = styled.div`
    border-right: 1px solid ${props => props.theme.primaryColor};
    flex: auto;
`;

const TimelineItemBufferRight = styled.div`
    border-left: 1px hidden ${props => props.theme.primaryColor};
    flex: auto;
`;

const TimelineBufferContainer = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: row;
    height: 50%
`;

function TimelineBuffer() {
    return (
    <TimelineBufferContainer className="timeline-buffer-container">
        <TimelineItemBufferLeft className="timeline-item-buffer-top"></TimelineItemBufferLeft>
        <TimelineItemBufferRight className="timeline-item-buffer-bottom"></TimelineItemBufferRight>
    </TimelineBufferContainer>
    );
}

const TimelineEntry = styled.div`
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 5px;
    flex: auto;
    height: 50%;
`;

const TimelineItemContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 70%;
    height: 50%;
    flex-direction: column;
`;

function TimelineItem(props){
    return (
    <TimelineItemContainer align={props.align} className="timeline-item-container">
        <TimelineBuffer className="timneline-buffer"></TimelineBuffer>
        <TimelineEntry className="timeline-entry"></TimelineEntry>
        <TimelineBuffer className="timneline-buffer"></TimelineBuffer>
    </TimelineItemContainer>
    );
}

export {TimelineDisplay, TimelineItem};