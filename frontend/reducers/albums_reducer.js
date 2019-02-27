import {RECEIVE_ALBUM} from '../actions/album_actions'
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_ALBUM:
            return merge({}, state, {[action.album.id]: action.album});
        default:
            return state;
    }
};