import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER } 
from '../actions/session_actions';
import merge from 'lodash/merge';

const nullSession = {currentUser: null};

export default (state=nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {currentUser: action.user.id});
        case LOGOUT_CURRENT_USER:
            return nullSession;
        default:
            return state;
    }
};

