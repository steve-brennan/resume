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

export const SkillActions = {
    RECEIVE_SKILLS: 'RECEIVE_SKILLS'
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

function receiveSkills(docs) {
    return {
        type: SkillActions.RECEIVE_SKILLS,
        skills : docs
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

function getSkills() {
    return dispatch => {
        const db = firebase.firestore();
        db.collection("skills").get().then((querySnapshot) =>{
            var skills = [];
            querySnapshot.forEach((doc) => {
                skills.push(doc);
            });
            dispatch(receiveSkills(skills));
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

function shouldGetSkills(state) {
    const skills = state.skills;
    if(!skills.length > 0) {
        return true;
    } else {
        return false;
    }
}

export function getSkillsIfNeeded() {
    return(dispatch, getState) => {
        if(shouldGetSkills(getState())) {
            return dispatch(getSkills());
        }
    }
}

export function setTimelineVisibilityFilters(filter) {
    return {
        type: SET_TIMELINE_VISIBILITY_FILTERS,
        filter
    }
}

