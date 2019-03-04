import merge from 'lodash/merge';
import {RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS} from '../actions/playlist_actions';

const initialState = {};

export default (state=initialState, action) => {
    switch(action.type) {
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.playlist.id]: action.playlist});
        case RECEIVE_PLAYLISTS:
            return merge({}, state, action.playlists);
        default:
            return state; 
    }
};