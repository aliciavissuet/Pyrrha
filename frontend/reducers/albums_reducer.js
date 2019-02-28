import {RECEIVE_ALBUM, LOADING_ALBUM} from '../actions/album_actions'
import merge from 'lodash/merge';
import { RECEIVE_ARTIST_ALBUMS } from '../actions/artist_actions';

 
const initialState = {
    loading: false
};
export default (state=initialState, action) => {
    switch(action.type) {
        case LOADING_ALBUM: 
            return merge(state, {loading: true});
        case RECEIVE_ALBUM:
            return merge({}, state, {byId: {[action.album.id]: action.album}}, {loading: false});
        case RECEIVE_ARTIST_ALBUMS:
            return merge({}, state, {byId: action.albums}, { loading: false });
        default:
            return state;
    }
};