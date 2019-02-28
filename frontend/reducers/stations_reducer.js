import merge from 'lodash/merge';
import { LOADING_STATION, RECEIVE_STATION } from "../actions/station_actions";

const initialState = {
    loading: false
};

export default (state=initialState, action) => {
    switch(action.type) {
        case LOADING_STATION:
            return merge({}, state, {loading: true});
        case RECEIVE_STATION:
            return merge({}, state, {byId: {[action.station.id]: action.station}});
        default:
            return state;
    }
};