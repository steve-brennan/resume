import styled from 'styled-components';

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

const ControlButton = styled.button`
    border: 1px solid ${props => props.theme.primaryColor};
    flex-shrink: 0;
    width: 40%;
    flex: 1 1 auto;
    margin: 10px;
    border-radius: 10px;
    background-color: ${ props => props.active ? props.theme.primaryColor : 'white'};
    color: ${props => props.active ? 'white' : props.theme.primaryColor};

    &:focus {
        outline:0;
    }
`;



export {TimelineControls, ControlButton};