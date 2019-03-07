import {RECEIVE_RECENT_TRACKS} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_RECENT_TRACKS:
            return merge({}, state, action.tracks);
        default:
            return state;
    }
};