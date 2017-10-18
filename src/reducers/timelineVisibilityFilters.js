import {TimelineVisibilityFilters} from '../actions';

const timelineVisibilityFilters = (state = [TimelineVisibilityFilters.SHOW_ALL], action) => {
    switch(action.type) {
        case 'SET_TIMELINE_VISIBILITY_FILTERS':
            return filterFilters(state, action.filter)
        default:
            return state
    }
}

function filterFilters(currentFilters, newFilter) {
    // If show-all is clicked clear other filters and set show all in all cases
    if(newFilter === TimelineVisibilityFilters.SHOW_ALL) {
        return [TimelineVisibilityFilters.SHOW_ALL];
    // If filter is already in the array, remove it (i.e. toggle)
    } else if(currentFilters.includes(newFilter)) {
        return currentFilters.filter(filter => {
            return filter !== newFilter;
        })
    // Otherwise just add it to the array, and ensure show-all is removed (mutex)
    } else {

        var newFilters = currentFilters.slice();
        newFilters.push(newFilter);
        return newFilters = newFilters.filter((filter) => {
            return filter !== TimelineVisibilityFilters.SHOW_ALL;
        })
       
    }

}

export default timelineVisibilityFilters