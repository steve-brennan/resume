import React from 'react';
import styled from 'styled-components';
import {TimelineEntryDisplay} from './TimelineEntry';


const TimelineItemBufferLeft = styled.div`
    border-right: 1px solid ${props => props.theme.primaryColor};
    flex: 1 0 auto;

    min-height: 0px;
    overflow: hidden;
`;

const TimelineItemBufferRight = styled.div`
    border-left: 1px hidden ${props => props.theme.primaryColor};
    flex: 1 0 auto;

    min-height: 0px;
    overflow: hidden;
`;

const TimelineBufferContainer = styled.div`
    display: flex;
    flex: 1 0 auto ;
    flex-direction: row;

    min-height: 0px;
    overflow: hidden;
`;

function TimelineBuffer() {
    return (
    <TimelineBufferContainer className="timeline-buffer-container">
        <TimelineItemBufferLeft className="timeline-item-buffer-left"></TimelineItemBufferLeft>
        <TimelineItemBufferRight className="timeline-item-buffer-right"></TimelineItemBufferRight>
    </TimelineBufferContainer>
    );
}

const TimelineListItem = styled.li`
    display: flex;
    flex: 1 0 auto;
    width: 70%;
    flex-direction: column;

    min-height: 0;
    overflow: hidden;

`;

const TimelineEntryList = styled.ul`
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

function TimelineEntryListDisplay(props) {
    const entries = props.timelineEntries;
    const entryList = entries.map((entry) => {
        return (
        <TimelineListItem className="timeline-list-item" key={entry.id.toString()}>
            <TimelineBuffer/>
                <TimelineEntryDisplay id={entry.id}
                    organisation={entry.data().organisation}
                    dateFrom={entry.data().dateFrom}
                    dateTo={entry.data().dateTo}
                    role={entry.data().role}
                    details={entry.data().details}
                    category={entry.data().category}
                    />
            <TimelineBuffer/>
        </TimelineListItem>
        );
    });

    return (
        <TimelineEntryList className="timeline-entry-list">{entryList}</TimelineEntryList>
    );
}


export {TimelineEntryListDisplay};