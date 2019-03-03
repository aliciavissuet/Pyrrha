import { RECEIVE_STATIONS } from './station_actions';
import { RECEIVE_ALBUMS } from './album_actions';
import { RECEIVE_ARTISTS } from './artist_actions';
import { RECEIVE_TRACKS } from './track_actions';
import {LOADING_USER, RECEIVE_CURRENT_USER} from './session_actions';

import * as UserAPIUtils from '../utils/user_api_util';



const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACKS,
    tracks
});
export const receiveStations = (stations) => ({
    type: RECEIVE_STATIONS,
    stations
});

const loadingTrue = () => ({
    type: LOADING_USER
});

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const updateUserFollows = (payload) => dispatch => {
    dispatch(loadingTrue());
    UserAPIUtils.saveMedia(payload).then(payload => {
        dispatch(receiveStations(payload.stations));
        dispatch(receiveArtists(payload.artists));
        dispatch(receiveAlbums(payload.albums));
        dispatch(receiveTracks(payload.tracks));
        dispatch(receiveCurrentUser(payload.user));
    });
};

// export const getUserAlbums = (id) => dispatch => {
//     dispatch(loadingTrue());
//     UserAPIUtils.saveMedia(payload).then(payload => {
//         dispatch(receiveStations(payload.stations));
//         dispatch(receiveArtists(payload.artists));
//         dispatch(receiveAlbums(payload.albums));
//         dispatch(receiveTracks(payload.tracks));
//         dispatch(receiveCurrentUser(payload.user));
//     });
// }