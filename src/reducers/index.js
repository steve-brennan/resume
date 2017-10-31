import {combineReducers} from 'redux';
import timelineVisibilityFilters from './timelineVisibilityFilters';
import timelineEntries from './timelineEntries';
import skills from './skills';

const resumeApp = combineReducers({
    timelineVisibilityFilters,
    timelineEntries,
    skills
});

export default resumeApp;