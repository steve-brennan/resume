import React, { Component } from 'react';
import styled from 'styled-components';
import {TimelineControlsDisplay} from './TimelineControls';
import {TimelineEntryListDisplay} from './TimelineEntryList';
import {getEntriesIfNeeded} from '../actions'
import {connect} from 'react-redux';
import {TimelineVisibilityFilters} from '../actions';

const TimelineSection = styled.section`
    margin: 0 auto;
    width: 100%;
    height: inherit;
`;

const TimelineView = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

class Timeline extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getEntriesIfNeeded());
    }

    render() {
        const {timelineEntries} =  this.props;
        return (
            <TimelineSection className="timeline-section">
                <TimelineView className="timeline-view">
                    <TimelineControlsDisplay/>
                    <TimelineEntryListDisplay timelineEntries={timelineEntries}/>
                </TimelineView>
            </TimelineSection>
        );
    }
}

const getVisisibleTimelineEntries = (timelineEntries, filters) => {

    let visibileEntries = [];
    if(filters.includes(TimelineVisibilityFilters.SHOW_ALL)) {
        visibileEntries = timelineEntries;
    } else { 
        visibileEntries = timelineEntries.filter((entry) => {
            if(filters.includes(entry.data().category)) {
                return true;
            }
            return false;
        })
    }
    visibileEntries.sort((a,b) => {
        console.log("sorting...");
        let dateA = new Date(a.data().dateFrom);
        let dateB = new Date(b.data().dateFrom);
        return dateB - dateA;
    })
    return visibileEntries;
}

const mapStateToProps = (state, ownProps) => {
    return {
        timelineEntries: getVisisibleTimelineEntries( state.timelineEntries, state.timelineVisibilityFilters)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect( mapStateToProps, null)  (Timeline);