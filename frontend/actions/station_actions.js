import * as StationAPIUtil from '../utils/station_api_util';
import {RECEIVE_TRACKS} from './track_actions';
import { RECEIVE_ALBUMS } from './album_actions';
import { RECEIVE_ARTISTS } from './artist_actions';
import {RECEIVE_CURRENT_USER} from './session_actions';
export const RECEIVE_STATION = 'RECEIVE_STATION';
export const RECEIVE_STATIONS = 'RECEIVE_STATIONS';
export const LOADING_STATION = 'LOADING_STATION';

const receiveStation = (station) => ({
    type: RECEIVE_STATION,
    station
});

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});
const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

const loadingTrue = () => ({
    type: LOADING_STATION
});

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const fetchStation = (id) => dispatch => {
    dispatch(loadingTrue());
    StationAPIUtil.fetchStation(id).then(payload => {
        dispatch(receiveArtists(payload.artists));
        dispatch(receiveAlbums(payload.albums));
        dispatch(receiveTracks(payload.tracks));
        dispatch(receiveStation(payload.station));
    });
};

export const postStation = station => dispatch => {
    dispatch(loadingTrue());
    StationAPIUtil.postStation(station).then(payload => {
        dispatch(receiveArtists(payload.artists));
        dispatch(receiveAlbums(payload.albums));
        dispatch(receiveTracks(payload.tracks));
        dispatch(receiveCurrentUser(payload.user));
        dispatch(receiveStation(payload.station));
    });
};