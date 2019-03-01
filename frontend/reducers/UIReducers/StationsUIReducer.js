import { LOADING_STATION } from '../../actions/station_actions';
import merge from 'lodash/merge';
const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_STATION:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};