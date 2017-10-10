import React from 'react';
import styled from 'styled-components';


function TimelineDisplay(props) {
    const entries = props.timelineEntries;

    const entryList = entries.map((entry) => {
        return (
        <TimelineItem id={entry.id}
            key={entry.id.toString()}
            place={entry.place}
            time={entry.time}
            role={entry.role}
            />
        );
    });

    return (
        <TimelineDisplayList className="timeline-display-list">{entryList}</TimelineDisplayList>
    );
}

const TimelineDisplayList = styled.ul`

    margin: 0 auto;
    flex: 2 2 auto;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;

    list-style-type: none;
    padding: 0;
`;

const TimelineItemBufferLeft = styled.div`
    border-right: 1px solid ${props => props.theme.primaryColor};
    flex: 1 0 auto;

`;

const TimelineItemBufferRight = styled.div`
    border-left: 1px hidden ${props => props.theme.primaryColor};
    flex: 1 0 auto;

`;

const TimelineBufferContainer = styled.div`
    display: flex;
    flex: 1 1 auto ;
    flex-direction: row;
    /*height: 50%;*/

`;

function TimelineBuffer() {
    return (
    <TimelineBufferContainer className="timeline-buffer-container">
        <TimelineItemBufferLeft className="timeline-item-buffer-left"></TimelineItemBufferLeft>
        <TimelineItemBufferRight className="timeline-item-buffer-right"></TimelineItemBufferRight>
    </TimelineBufferContainer>
    );
}

const TimelineEntry = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 5px;
    flex: 1 1 auto;
    height: 50%;
`;


const TimelineItemContainer = styled.li`
    display: flex;
    flex: 1 0 auto;
    width: 70%;
    height: 10%;
    flex-direction: column;
`;

function TimelineItem(props){
    return (
    <TimelineItemContainer key={props.id} align={props.align} className="timeline-item-container">
        <TimelineBuffer/>
        <TimelineEntry props={props} className="timeline-entry">
            <p>{props.place}</p>
            <p>{props.time}</p>
            <p>{props.role}</p>
        </TimelineEntry>
       <TimelineBuffer/>
    </TimelineItemContainer>
    );
}

export {TimelineDisplay, TimelineItem};