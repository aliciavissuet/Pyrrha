import {RECEIVE_ARTIST, LOADING_ARTIST} from '../actions/artist_actions';
import {RECEIVE_ALBUM_ARTISTS} from '../actions/album_actions';
import merge from 'lodash/merge';

const initialState = {
    loading: false
};
export default (state=initialState, action) => {
    switch(action.type) {
        case LOADING_ARTIST:
            return merge({}, state, { loading: true });
        case RECEIVE_ARTIST:
            return merge({}, state, { byId: {[action.artist.id]: action.artist} }, { loading: false });
        case RECEIVE_ALBUM_ARTISTS:
            return merge({}, state, {byId: action.artists});
        default:
            return state;

    }
};