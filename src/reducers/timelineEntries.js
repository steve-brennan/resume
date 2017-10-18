const timelineEntries = (state = [], action) => {
    switch(action.type) {
        case 'SET_TIMELINE_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default timelineEntries;