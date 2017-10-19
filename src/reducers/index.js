import {combineReducers} from 'redux';
import timelineVisibilityFilters from './timelineVisibilityFilters';
import timelineEntries from './timelineEntries';

const resumeApp = combineReducers({
    timelineVisibilityFilters,
    timelineEntries
});

export default resumeApp;