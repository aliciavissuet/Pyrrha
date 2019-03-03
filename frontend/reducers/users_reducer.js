import {RECEIVE_CURRENT_USER, REMOVE_TRACK_ID} from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
    
};
export default (state=initialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.user.id]: action.user});
        default: 
            return state;
    }
};
    


