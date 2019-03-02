import { RECEIVE_SEARCH_ARTISTS, RECEIVE_SEARCH_ALBUMS, RECEIVE_SEARCH_TRACKS} from '../actions/search_actions';
import merge from 'lodash/merge';

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
};

export default (state={}, action) => {
    switch(action.type) {
        case RECEIVE_SEARCH_ARTISTS:
            if (!action.artists) {
                return merge({}, state, { artists: {} });
            } else {
                return merge({}, state, {artists: action.artists} );
            }
            
        case RECEIVE_SEARCH_ALBUMS:
            if (!action.albums) {
                return merge({}, state, { albums: {} }); 
            } else {
                return merge({}, state, { albums: action.albums });
            }
           
        case RECEIVE_SEARCH_TRACKS:
            if(!action.tracks) {
                return merge({}, state, { tracks: {} });
            } else {
                return merge({}, state, { tracks: action.tracks });
            }
            
        default:
            return state;
    }
};