import * as APIUtils from '../utils/session_api_util';
import {RECEIVE_STATIONS} from './station_actions';
import { RECEIVE_ALBUMS } from './album_actions';
import { RECEIVE_ARTISTS } from './artist_actions';
import { RECEIVE_TRACKS } from './track_actions';
import {CLEAR_RECENT} from './PlayBarActions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_ERRORS';
export const LOADING_USER = 'LOADING_USER';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,

});
export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveStations = (stations) => ({
    type: RECEIVE_STATIONS,
    stations
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});
const loadingTrue = () => ({
    type: LOADING_USER
});

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
const clearRecent = () => ({
    type: CLEAR_RECENT,
});

// const receiveSessions = (session) => ({
//     type: RECEIVE_SESSION,
//     stations
// });

// export const login = (user) => dispatch => (
//     APIUtils.postSession(user).then(payload => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));


export const logout = () => dispatch => {
    dispatch(clearRecent());
    APIUtils.deleteSession().then(res => dispatch(logoutCurrentUser()));
};

export const createUser = user => dispatch => (
    APIUtils.postUser(user).then(payload => (dispatch(receiveCurrentUser(payload.user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));

export const demoLogin = () => dispatch => (
    APIUtils.demoLogin().then(user => (dispatch(receiveCurrentUser(user))), errors => (dispatch(receiveErrors(errors.responseJSON)))));


export const login = (user) => dispatch => {
    dispatch(loadingTrue());
    APIUtils.postSession(user).then(payload => {
        dispatch(receiveStations(payload.stations));
        dispatch(receiveArtists(payload.artists));
        dispatch(receiveAlbums(payload.albums));
        dispatch(receiveTracks(payload.tracks));
        dispatch(receiveCurrentUser(payload.user));
    }, errors => (dispatch(receiveErrors(errors.responseJSON))));
};