import {RECEIVE_ARTIST} from '../actions/artist_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_ARTIST:
            return merge({}, state, {[action.artist.id]: action.artist});
        default:
            return state;

    }
};