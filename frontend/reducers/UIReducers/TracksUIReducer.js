import {LOADING_TRACK} from '../../actions/track_actions';
import merge from 'lodash/merge';
const initialState = {}
export default (state = {}, action) => {
    switch (action.type) {
        case LOADING_TRACK:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};