import React from 'react';
import styled from 'styled-components';


const TimelineEntryView = styled.div`
display: flex;
border: 1px solid ${props => props.theme.primaryColor};
border-radius: 5px;
flex: 1 1 auto;
/*height: 50%;*/
`;

function TimelineEntryDisplay(props){
    console.log("CALLED TlED ");
    return (
        <TimelineEntryView props={props} className="timeline-entry-view">
            <p>{props.organisation}</p>
            <p>{props.dateFrom.toString()}</p>
            <p>{props.dateTo.toString()}</p>
            <p>{props.role}</p>
            <p>{props.details}</p>
        </TimelineEntryView>
    );
}

export {TimelineEntryDisplay}