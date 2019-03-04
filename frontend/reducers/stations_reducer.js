import merge from 'lodash/merge';
import {  RECEIVE_STATION, RECEIVE_STATIONS, LOADING_STATION, REMOVE_TRACK_ID } from "../actions/station_actions";
import { CLEAR } from '../actions/album_actions';
const initialState = {
    
};

export default (state=initialState, action) => {
    switch(action.type) {
        case RECEIVE_STATION:
            return merge({}, state,  { [action.station.id]: action.station });
        case RECEIVE_STATIONS:
            return merge({}, state, action.stations);
        case REMOVE_TRACK_ID:
            console.log('here')
            let station = state[action.stationId];
            
            trackIds = station.trackIds.filter(id => id!== action.trackId);
            return merge({}, state, {}, { [action.station.id]: { trackIds: trackIds } });
        case CLEAR:
            return {};
        default:
            return state;
    }
};