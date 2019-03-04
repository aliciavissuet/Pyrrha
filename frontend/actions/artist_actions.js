import * as ArtistAPIUtil from '../utils/artist_api_util';
import {RECEIVE_ALBUMS} from './album_actions';
import { RECEIVE_TRACKS } from './track_actions';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';
// import LOADING_ARTIST from ''
// export const RECEIVE_ARTIST_ALBUMS = 'RECEIVE_ARTIST_ALBUMS';
export const LOADING_ARTIST = 'LOADING_ARTIST';
export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

const receiveArtistAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveArtistErrors = (errors) => ({
    type: RECEIVE_ARTIST_ERRORS,
    errors
});
const receiveArtistTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const loadingTrue = () => ({
    type: LOADING_ARTIST
});

export const fetchArtist = (id) => dispatch => (
    ArtistAPIUtil.fetchArtist(id).then((payload => {
        dispatch(receiveArtist(payload.artist));
        dispatch(receiveArtistAlbums(payload.albums));
    }), (errors => dispatch(receiveArtistErrors(errors))))
);

export const fetchArtists = (userId) => dispatch => {
    
    dispatch(loadingTrue());
    ArtistAPIUtil.fetchArtists(userId).then(payload => {
        
        dispatch(receiveArtistAlbums(payload.albums));
        dispatch(receiveArtistTracks(payload.tracks));
        dispatch(receiveArtists(payload.artists));
    });
};

export const removeArtistFollow = af => dispatch => {
    dispatch(loadingTrue());
    ArtistAPIUtil.removeArtistFollow(af).then(payload => {
        dispatch(receiveArtistAlbums(payload.albums));
        dispatch(receiveArtistTracks(payload.tracks));
        dispatch(receiveArtists(payload.artists));
    });
};