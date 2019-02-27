import * as TrackAPIUtil from '../utils/track_api_util';
import { RECEIVE_ARTIST } from "./artist_actions";

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ARTIST = 'RECEIVE_TRACK_ARTIST';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const receiveTrackArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
});

export const fetchTrack = (id) => dispatch => (
    TrackAPIUtil.fetchTrack(id).then(track => {
        dispatch(receiveTrack(track.track));
        dispatch(receiveTrackArtist(track.artist));
    })
);