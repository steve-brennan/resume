import React, { Component } from 'react';
import styled from 'styled-components';
import {TimelineControlsView} from './TimelineControls';
import {TimelineDisplay} from './TimelineDisplay';
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
                    <TimelineControlsView className="timeline-controls">
                    </TimelineControlsView>
                    <TimelineDisplay timelineEntries={timelineEntries} className="timeline-display">
                    </TimelineDisplay>
                </TimelineView>
            </TimelineSection>
        );
    }
}

const getVisisibleTimelineEntries = (timelineEntries, filters) => {
    if(filters.includes(TimelineVisibilityFilters.SHOW_ALL)) {
        return timelineEntries;
    }
    var entries = timelineEntries.slice();
    return entries.filter((entry) => {
        if(filters.includes(entry.data().category)) {
            return true;
        }
        return false;
    })
}

const mapStateToProps = (state, ownProps) => {
    //console.log('STATE ' + state.timelineVisibilityFilters)
    return {
        timelineEntries: getVisisibleTimelineEntries( state.timelineEntries, state.timelineVisibilityFilters)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect( mapStateToProps, null)  (Timeline);