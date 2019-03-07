import {RECEIVE_RECENT_PLAYLISTS} from '../../actions/recently_played_actions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RECENT_PLAYLISTS:
            
            return merge({}, state, action.playlists);
        default:
            return state;
    }
};