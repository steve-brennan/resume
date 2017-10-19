import {EntryActions} from '../actions'

const timelineEntries = (state = [], action) => {
    switch(action.type) {
        case  EntryActions.REQUEST_ENTRIES :
            return state
        case  EntryActions.RECEIVE_ENTRIES :
            return action.timelineEntries
        default:
            return state
    }
}

export default timelineEntries;