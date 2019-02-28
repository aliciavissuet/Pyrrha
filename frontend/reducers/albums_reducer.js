import {RECEIVE_ALBUM} from '../actions/album_actions'
import merge from 'lodash/merge';
import { RECEIVE_ARTIST_ALBUMS } from '../actions/artist_actions';

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_ALBUM:
            return merge({}, state, {[action.album.id]: action.album});
        case RECEIVE_ARTIST_ALBUMS:
            return merge({}, state, action.albums)
        default:
            return state;
    }
};