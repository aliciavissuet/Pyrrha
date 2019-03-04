import {RECEIVE_ARTIST, LOADING_ARTIST, RECEIVE_ARTISTS} from '../actions/artist_actions';
import {CLEAR} from '../actions/album_actions';
// import {RECEIVE_ALBUM_ARTISTS} from '../actions/album_actions';

import merge from 'lodash/merge';

const initialState = {
    
};
export default (state=initialState, action) => {
    switch(action.type) {
        case RECEIVE_ARTIST:
            return merge({}, state, { [action.artist.id]: action.artist} );
        case RECEIVE_ARTISTS:
            return merge({}, state, action.artists);
        case CLEAR:
            return {};
        default:
            return state;

    }
};