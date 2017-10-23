import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


const TimelineEntryView = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 5px;
    flex: 1 1 auto;

    flex-direction: column;
    /*height: 50%;*/
`;

const TimelineEntryHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1 auto;
    padding-bottom: 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
    justify-content: center;

    border-radius: 5px;
    background-color: ${props => props.theme.primaryColorLighter};
    
    font-family: ${props => props.theme.primaryFontFamily};

    background-color: ${props => props.theme.primaryColor};
    color: white;
`

const TimelineEntryPlace = styled.div`
    text-align: center;
    flex: 1 1 auto;

    font-family: ${props => props.theme.primaryFontFamily};
`

const TimelineEntryDates = styled.div`
    text-align: center;
    flex: 1 1 auto;

    font-family: ${props => props.theme.primaryFontFamily};
`

const TimelineEntryRole = styled.div`
    text-align: center;
    flex: 1 1 auto;

    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: bold;

`

const TimelineEntryBody = styled.div`
    flex: 2 1 auto;

    font-family: ${props => props.theme.primaryFontFamily};
`

function TimelineEntryDisplay(props){
    return (
        <TimelineEntryView props={props} className="timeline-entry-view">
            <TimelineEntryHeading className="timeline-entry-heading">
                <TimelineEntryRole>{props.role}</TimelineEntryRole>
                <TimelineEntryPlace>{props.organisation}</TimelineEntryPlace>
                <TimelineEntryDates>{moment(props.dateFrom).format('MMM YYYY') +" "+ moment(props.dateTo).format('MMM YYYY')}</TimelineEntryDates>
            </TimelineEntryHeading>
            <TimelineEntryBody>
                {props.details}
            </TimelineEntryBody>
        </TimelineEntryView>
    );
}

// <p>{props.organisation}</p>
// <p>{props.dateFrom.toString()}</p>
// <p>{props.dateTo.toString()}</p>
// <p>{props.role}</p>
// <p>{props.details}</p>

export {TimelineEntryDisplay}