import React, { Component } from 'react';
import styled from 'styled-components';

const TimelineSection = styled.section`
    border: 1px solid red;
    margin: 0 auto;
    width: 100%;

    display: flex;
`;

const TimelineView = styled.div`
    border: 1px solid blue;
    flex: auto;
    display: flex;
    flex-direction: column;
`;

const TimelineDetail = styled.div`
    border: 1px solid blue;
    flex: 2;
`;

const TimelineControls = styled.div`
    border: 1px solid green;
    flex: 0.1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    justify-content: center;
`;

const TimelineDisplay = styled.div`
    border: 1px solid green;
    flex: auto;
`;

const Button = styled.button`
    border: 1px solid black;
    flex-shrink: 0;
    width: 40%;
    flex: 1 1 auto;
    margin: 10px;
    border-radius: 10px;
    background-color: ${ props => props.active ? '#42d9f4' : 'white'};
    color: ${props => props.active ? 'white' : '#42d9f4'};
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
                        <Button id="show-all-btn" 
                            className="show-all-btn" 
                            active={this.state.activeButtons.includes("show-all-btn") ? true : false} 
                            onClick={this.handleButtonClick}>All</Button>
                        <Button id="show-relevant-btn" 
                            className="show-relevant-btn"
                            active={this.state.activeButtons.includes("show-relevant-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Professional Software</Button>
                        <Button id="show-education-btn" 
                            className="show-education-btn"
                            active={this.state.activeButtons.includes("show-education-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Education</Button>                       
                        <Button id="show-other-btn" 
                            className="show-other-btn"
                            active={this.state.activeButtons.includes("show-other-btn") ? true : false} 
                            onClick={this.handleButtonClick}>Other</Button>
                    </TimelineControls>
                    <TimelineDisplay className="timeline-display"></TimelineDisplay>
                </TimelineView>
                <TimelineDetail className="timeline-details"></TimelineDetail>
            </TimelineSection>
        );
    }
}

export default Timeline;