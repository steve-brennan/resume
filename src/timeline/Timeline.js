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

const getVisisibleTimelineEntries = (timelineEntries, filter) => {
    switch(filter) {
        case TimelineVisibilityFilters.SHOW_ALL:
            return timelineEntries;
        case TimelineVisibilityFilters.SHOW_RELEVANT:
            return timelineEntries.filter(t => t.category === 'relevant');
        case TimelineVisibilityFilters.SHOW_EDUCATION:
            return timelineEntries.filter(t => t.category === 'education');
        case TimelineVisibilityFilters.SHOW_OTHER:
            return timelineEntries.filter(t => t.category === 'other');
        default:
            return timelineEntries;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        timelineEntries: state.timelineEntries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect( mapStateToProps, null)  (Timeline);