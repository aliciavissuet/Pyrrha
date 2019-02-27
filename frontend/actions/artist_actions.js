import * as ArtistAPIUtil from '../utils/artist_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveArtistErrors = (errors) => ({
    type: RECEIVE_ARTIST_ERRORS,
    errors
});

export const fetchArtist = (id) => dispatch => (
    ArtistAPIUtil.fetchArtist(id)
    .then((artist => dispatch(receiveArtist(artist))),
    (errors => dispatch(receiveArtistErrors(errors)))));