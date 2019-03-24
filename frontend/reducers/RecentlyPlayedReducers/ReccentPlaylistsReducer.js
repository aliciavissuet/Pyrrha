import { RECEIVE_RECENT_PLAYLISTS, CLEAR_RECENT } from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RECENT_PLAYLISTS:
            return merge({}, state, action.playlists);
        case CLEAR_RECENT:
            return {};
        default:
            return state;
    }
};