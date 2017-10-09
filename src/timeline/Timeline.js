import React, { Component } from 'react';
import styled from 'styled-components';
import {TimelineControls, ControlButton} from './TimelineControls';
import {TimelineDisplay, TimelineItem} from './TimelineDisplay';

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
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {activeButtons: ['show-all-btn']};
    }

    handleButtonClick(e) {

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
            } else if( e.target.id == "show-all-btn") {

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
                            onClick={this.handleButtonClick}>All</ControlButton>
                        <ControlButton id="show-relevant-btn" 
                            className="show-relevant-btn"
                            active={this.state.activeButtons.includes("show-relevant-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Professional Software</ControlButton>
                        <ControlButton id="show-education-btn" 
                            className="show-education-btn"
                            active={this.state.activeButtons.includes("show-education-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Education</ControlButton>                       
                        <ControlButton id="show-other-btn" 
                            className="show-other-btn"
                            active={this.state.activeButtons.includes("show-other-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Other</ControlButton>
                    </TimelineControls>
                    <TimelineDisplay className="timeline-display">
                       <TimelineItem>item 1</TimelineItem>
                       <TimelineItem>item 1</TimelineItem>
                       <TimelineItem>item 1</TimelineItem>
                       <TimelineItem>item 1</TimelineItem>
                       <TimelineItem>item 1</TimelineItem>
                    </TimelineDisplay>
                </TimelineView>
                
            </TimelineSection>
        );
    }
}

export default Timeline;