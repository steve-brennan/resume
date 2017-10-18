import React from 'react';
import styled from 'styled-components';
import ControlLink from './ControlLink'
import {TimelineVisibilityFilters} from '../actions';

const TimelineControls = styled.div`
    margin: 0 auto;
    flex: 0.1 0.1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    justify-content: center;
    width: 70%;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

function TimelineControlsView(props)  {
    
    return ( 
        <TimelineControls>
            <ControlLink id="show-all-link" 
                className="show-all-link"
                filter={TimelineVisibilityFilters.SHOW_ALL}
                >All</ControlLink>
            <ControlLink id="show-relevant-link" 
                className="show-relevant-link"
                filter={TimelineVisibilityFilters.SHOW_RELEVANT}
                >Professional Software</ControlLink>
            <ControlLink id="show-education-link" 
                className="show-education-link"
                filter={TimelineVisibilityFilters.SHOW_EDUCATION}
                >Education</ControlLink>                       
            <ControlLink id="show-other-link" 
                className="show-other-link"
                filter={TimelineVisibilityFilters.SHOW_OTHER}
                >Other</ControlLink>
        </TimelineControls>
    )
}

export {TimelineControlsView};