import * as TrackAPIUtil from '../utils/track_api_util';
import { RECEIVE_ARTIST } from "./artist_actions";
import { RECEIVE_ALBUM } from './album_actions';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ARTIST = 'RECEIVE_TRACK_ARTIST';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const RECEIVE_TRACK_ALBUM = 'RECEIVE_TRACK_ALBUM';

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const receiveTrackArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveTrackAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

export const fetchTrack = (id) => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(payload => {
        dispatch(receiveTrack(payload.track));
        dispatch(receiveTrackArtist(payload.artist));
        dispatch(receiveTrackAlbum(payload.album));
    })
);