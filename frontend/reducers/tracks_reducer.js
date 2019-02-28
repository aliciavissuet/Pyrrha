import {RECEIVE_TRACK, LOADING_TRACK} from '../actions/track_actions';
import { RECEIVE_ALBUM_TRACKS } from '../actions/album_actions';
import merge from 'lodash/merge';

const initialState = {
     loading: false 
};

export default (state=initialState, action) => {
    switch(action.type) {
        case LOADING_TRACK:
            return merge({}, state, { loading: true });
        case RECEIVE_TRACK:
            return merge({}, state, { byId: { [action.track.id]: action.track}}, {loading: false});
        case RECEIVE_ALBUM_TRACKS:
            
            return merge({}, state, {byId: action.tracks}, { loading: false });
        default:
            return state;
    }
};