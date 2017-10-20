import * as firebase from 'firebase';
import 'firebase/firestore';


export const SET_TIMELINE_VISIBILITY_FILTERS = 'SET_TIMELINE_VISIBILITY_FILTERS';

export const TimelineVisibilityFilters = {
    SHOW_ALL: 'all',
    SHOW_RELEVANT: 'relevant',
    SHOW_EDUCATION: 'education',
    SHOW_OTHER: 'other'
}

export const EntryActions = {
    REQUEST_ENTRIES: 'REQUEST_ENTRIES',
    RECEIVE_ENTRIES: 'RECEIVE_ENTRIES',
}

function requestEntries() {
    return {
        type: EntryActions.REQUEST_ENTRIES
    }
}

function receiveEntries(docs) {
    return {
        type: EntryActions.RECEIVE_ENTRIES,
        timelineEntries: docs
    }
}

function getEntries() {
    return dispatch => {
        dispatch(requestEntries());
        const db = firebase.firestore();
        db.collection("timelineEntries").get().then((querySnapshot) =>{
            var timelineEntries = [];
            querySnapshot.forEach((doc)=>{
                timelineEntries.push(doc);
            });
            dispatch(receiveEntries(timelineEntries));
        });

    }
}

function shouldGetEntries(state) {
    const timelineEntries = state.timelineEntries;
    if(!timelineEntries.length > 0 ) {
        return true;
    } else {
        return false;
    }
}

export function getEntriesIfNeeded() {
    return (dispatch, getState) => {
        if(shouldGetEntries(getState())) {
            return dispatch(getEntries());
        }
    }
} 

export function setTimelineVisibilityFilters(filter) {
    return {
        type: SET_TIMELINE_VISIBILITY_FILTERS,
        filter
    }
}

