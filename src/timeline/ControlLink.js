import styled from 'styled-components';
import {connect} from 'react-redux';
import {setTimelineVisibilityFilters} from '../actions';

const Link = styled.a`
    border: 1px solid ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.primaryFontFamily};
    text-align: center;
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

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.timelineVisibilityFilters.includes(ownProps.filter),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setTimelineVisibilityFilters(ownProps.filter))
        }
    }
}

const ControlLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default ControlLink