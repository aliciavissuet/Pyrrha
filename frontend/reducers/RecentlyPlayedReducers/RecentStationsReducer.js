import {RECEIVE_RECENT_STATIONS} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {

        case RECEIVE_RECENT_STATIONS:
            return merge({}, state, action.stations);
        default:
            return state;
    }
};