import {RECEIVE_TRACK} from '../actions/track_actions';
import { RECEIVE_ALBUM_TRACKS } from '../actions/album_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_TRACK:
            return merge({}, state, {[action.track.id]: action.track});
        case RECEIVE_ALBUM_TRACKS:
            
            return merge({}, state, action.tracks);
        default:
            return state;
    }
};