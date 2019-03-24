import {RECEIVE_RECENT_STATIONS, CLEAR_RECENT} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {

};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_RECENT_STATIONS:
            return merge({}, state, action.stations);
        case CLEAR_RECENT:
            return {};
        default:
            return state;
    }
};