import {RECEIVE_RECENT_ALBUMS} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_RECENT_ALBUMS:
            return merge({}, state, action.albums);
        default:
            return state;
    }
};