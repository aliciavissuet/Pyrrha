import {RECEIVE_TRACK} from '../actions/track_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_TRACK:
            return merge({}, state, {[action.track.id]: action.track});
        default:
            return state;
    }
};