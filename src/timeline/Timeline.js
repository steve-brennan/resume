import React, { Component } from 'react';
import styled from 'styled-components';
import {TimelineControls, ControlButton} from './TimelineControls';
import {TimelineDisplay} from './TimelineDisplay';

const timelineEntries = [
    
        {
            id: '1',
            place: 'Acme',
            time: '2001 to 2050',
            role: 'Technician'
        },
        {
            id: '2',
            place: 'CoolTech',
            time: '2051 to 2060',
            role: 'CEO'
        }
];

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
        this.handleControlButtonClick = this.handleControlButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {activeButtons: ['show-all-btn']};
    }

    handleItemClick(e) {

    }

    handleControlButtonClick(e) {

        var index = -1;
        var newActiveButtons = this.state.activeButtons.slice();

        // If the button is active romeove it from the list
        if(this.state.activeButtons.includes(e.target.id)) {
            index = this.state.activeButtons.indexOf(e.target.id);
            newActiveButtons.splice(index,1);
            this.setState({activeButtons: newActiveButtons});
        } else {
            index = this.state.activeButtons.indexOf("show-all-btn");
            if(index > -1) {
                console.log('all exists');
                newActiveButtons.splice(index, 1);
            } else if( e.target.id === "show-all-btn") {
                newActiveButtons = [];
            }
            this.setState(
            {activeButtons: newActiveButtons.concat(e.target.id)}
            );
        }        
    }

    render() {
        return (
            <TimelineSection className="timeline-section">
                <TimelineView className="timeline-view">
                    <TimelineControls className="timeline-controls">
                        <ControlButton id="show-all-btn" 
                            className="show-all-btn" 
                            active={this.state.activeButtons.includes("show-all-btn") ? true : false} 
                            onClick={this.handleControlButtonClick}>All</ControlButton>
                        <ControlButton id="show-relevant-btn" 
                            className="show-relevant-btn"
                            active={this.state.activeButtons.includes("show-relevant-btn") ? true : false} 
                            onClick={this.handleControlButtonClick}>Professional Software</ControlButton>
                        <ControlButton id="show-education-btn" 
                            className="show-education-btn"
                            active={this.state.activeButtons.includes("show-education-btn") ? true : false} 
                            onClick={this.handleControlButtonClick}>Education</ControlButton>                       
                        <ControlButton id="show-other-btn" 
                            className="show-other-btn"
                            active={this.state.activeButtons.includes("show-other-btn") ? true : false} 
                            onClick={this.handleControlButtonClick}>Other</ControlButton>
                    </TimelineControls>
                    <TimelineDisplay timelineEntries={timelineEntries} className="timeline-display">

                    </TimelineDisplay>
                </TimelineView>
                
            </TimelineSection>
        );
    }
}

export default Timeline;