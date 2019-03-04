import {RECEIVE_ALBUM, RECEIVE_ALBUMS, CLEAR} from '../actions/album_actions'
import merge from 'lodash/merge';
// import { RECEIVE_ARTIST_ALBUMS } from '../actions/artist_actions';

 
const initialState = {
    
};
export default (state=initialState, action) => {
    switch(action.type) {
        
        case RECEIVE_ALBUM:
            return merge({}, state, {[action.album.id]: action.album});
        case RECEIVE_ALBUMS:
            return merge({}, state, action.albums);
        case CLEAR:
            return {};
        default:
            return state;
    }
};