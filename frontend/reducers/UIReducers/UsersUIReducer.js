import {LOADING_USER} from '../../actions/session_actions';
import merge from 'lodash/merge';
const initialState = {
    loading: false
};

export default (state=initialState, action) => {
    switch(action.type){
        case LOADING_USER:
            return merge({}, state, {loading: true});
        default:
            return state;
    }
};