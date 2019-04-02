import {RECEIVE_RECENT_ALBUMS, CLEAR_RECENT} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_RECENT_ALBUMS:
            return merge({}, state, action.albums);
        case CLEAR_RECENT:
            console.log('album clear recent');
            return {};
        default:
            return state;
    }
};