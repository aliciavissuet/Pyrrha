import merge from 'lodash/merge';
import {  RECEIVE_STATION, RECEIVE_STATIONS, LOADING_STATION } from "../actions/station_actions";

const initialState = {
    
};

export default (state=initialState, action) => {
    switch(action.type) {
        case RECEIVE_STATION:
            return merge({}, state,  { [action.station.id]: action.station });
        case RECEIVE_STATIONS:
            return merge({}, state, action.stations);

        default:
            return state;
    }
};