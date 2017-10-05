import React, { Component } from 'react';
import styled from 'styled-components';

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

const TimelineControls = styled.div`
    margin: 0 auto;
    flex: 0.1 0.1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-evenly;
    justify-content: center;

    width: 70%;
    border-bottom: 1px solid #006fff;

    
`;

const TimelineDisplay = styled.div`
    margin: 0 auto;
    flex: 2 2 auto;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;

    align-items: center;
    overflow-y: scroll;
   
    
`;

const TimelineItemContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
    
    width: 70%;
    height: 50%;
    flex-direction: column;
`;

const TimelineBufferContainer = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: row;
    height: 50%
`;

const TimelineItemBufferLeft = styled.div`
    border-right: 1px solid #006fff;
    flex: auto;
`;

const TimelineItemBufferRight = styled.div`
    border-left: 1px hidden #006fff;
    flex: auto;
`;

function TimelineBuffer() {
    return (
    <TimelineBufferContainer className="timeline-buffer-container">
        <TimelineItemBufferLeft className="timeline-item-buffer-top"></TimelineItemBufferLeft>
        <TimelineItemBufferRight className="timeline-item-buffer-bottom"></TimelineItemBufferRight>
    </TimelineBufferContainer>
    );
}

const TimelineEntry = styled.div`
    border: 1px solid #006fff;
    border-radius: 5px;
    flex: auto;
    height: 50%;

`;

function TimelineItem(props){
    return (
    <TimelineItemContainer align={props.align} className="timeline-item-container">
        <TimelineBuffer className="timneline-buffer"></TimelineBuffer>
        <TimelineEntry className="timeline-entry"></TimelineEntry>
        <TimelineBuffer className="timneline-buffer"></TimelineBuffer>
    </TimelineItemContainer>
    );
}


const Button = styled.button`
    border: 1px solid #006fff;
    flex-shrink: 0;
    width: 40%;
    flex: 1 1 auto;
    margin: 10px;
    border-radius: 10px;
    background-color: ${ props => props.active ? '#006fff' : 'white'};
    color: ${props => props.active ? 'white' : '#006fff'};

    &:focus {
        outline:0;
    }
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