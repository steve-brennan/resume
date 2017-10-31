import {SkillActions} from '../actions'

const skills = (state = [], action) => {
    switch(action.type) {
        case  SkillActions.RECEIVE_SKILLS :
            return action.skills
        default:
            return state
    }
}

export default skills;