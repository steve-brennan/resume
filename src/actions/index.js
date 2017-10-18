
export const SET_TIMELINE_VISIBILITY_FILTERS = 'SET_TIMELINE_VISIBILITY_FILTERS';

export const TimelineVisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_RELEVANT: 'SHOW_RELEVANT',
    SHOW_EDUCATION: 'SHOW_EDUCATION',
    SHOW_OTHER: 'SHOW_OTHER'
}

export const setTimelineVisibilityFilters = filter => {
    return {
        type: SET_TIMELINE_VISIBILITY_FILTERS,
        filter
    }
}