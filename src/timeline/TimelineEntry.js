import React from 'react';
import styled from 'styled-components';
import moment from 'moment';


const TimelineEntryView = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 5px;
    flex: 1 1 auto;

    flex-direction: column;
    min-height: 0;
    overflow: hidden;
`;

const TimelineEntryHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
    justify-content: center;
    border-radius: 5px;
    font-family: ${props => props.theme.primaryFontFamily};
    background-color: ${props => props.theme.primaryColor};
    color: white;
    /*height: 30px;*/

    flex-wrap: wrap;
`

const TimelineEntryPlace = styled.div`
    text-align: center;
    flex: 1 1 auto;

    font-family: ${props => props.theme.primaryFontFamily};
`

const TimelineEntryDates = styled.div`
    text-align: right;
    flex: 1 1 auto;
    align-self: flex-end;
    font-style: italic;
    font-family: ${props => props.theme.primaryFontFamily};
    padding-right: 10px;
    padding-bottom: 5px;
`

const TimelineEntryRole = styled.div`
    text-align: left;
    flex: 1 1 auto;
    padding-left: 5px;
    font-family: ${props => props.theme.primaryFontFamily};
    font-weight: bold;

`

const TimelineEntryBody = styled.div`
    flex: 2 1 auto;
    font-family: ${props => props.theme.primaryFontFamily};
    color: darkgrey;

    min-height: 0;
    overflow: hidden;
`

const TimelineEnrtyDetail = styled.li`
    flex: 1 1 auto;
`

const TimelineEntryDetailsList = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    list-style: square;
    padding-top: 10px;
    
`

function TimelineEntryDetailsDisplay(props) {

    const detailsList = props.details.map((detail) => {
        return (
            <TimelineEnrtyDetail>{detail}</TimelineEnrtyDetail>
        )
    });

    return (
        <TimelineEntryDetailsList>{detailsList}</TimelineEntryDetailsList>
    )
    
}



function TimelineEntryDisplay(props){
    return (
        <TimelineEntryView props={props} className="timeline-entry-view">
            <TimelineEntryHeading className="timeline-entry-heading">
                <TimelineEntryRole>{props.role}</TimelineEntryRole>
                <TimelineEntryPlace>{props.organisation}</TimelineEntryPlace>
                <TimelineEntryDates>{moment(props.dateFrom).format('MMM YYYY') +" "+ moment(props.dateTo).format('MMM YYYY')}</TimelineEntryDates>
            </TimelineEntryHeading>
            <TimelineEntryBody>
                <TimelineEntryDetailsDisplay details={props.details}/>
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