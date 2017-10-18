import {combineReducers} from 'redux';
import timelineVisibilityFilters from './timelineVisibilityFilters';

const resumeApp = combineReducers({
    timelineVisibilityFilters,
});

export default resumeApp;