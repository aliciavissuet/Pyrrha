import * as ArtistAPIUtil from '../utils/artist_api_util';
import {RECEIVE_ALBUMS} from './album_actions';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';
// export const RECEIVE_ARTIST_ALBUMS = 'RECEIVE_ARTIST_ALBUMS';
export const LOADING_ARTIST = 'LOADING_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveArtistAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveArtistErrors = (errors) => ({
    type: RECEIVE_ARTIST_ERRORS,
    errors
});

export const fetchArtist = (id) => dispatch => (
    ArtistAPIUtil.fetchArtist(id).then((payload => {
        dispatch(receiveArtist(payload.artist));
        dispatch(receiveArtistAlbums(payload.albums));
    }), (errors => dispatch(receiveArtistErrors(errors))))
);