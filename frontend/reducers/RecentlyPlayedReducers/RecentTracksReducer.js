import {RECEIVE_RECENT_TRACKS, CLEAR_RECENT} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RECENT_TRACKS:
            return merge({}, state, action.tracks);
        case CLEAR_RECENT:
            return {};
        default:
            return state;
    }
};