import * as AlbumAPIUtil from '../utils/album_api_util';
import { LOADING_TRACK } from './track_actions';
import { RECEIVE_ARTISTS } from './artist_actions';
import {RECEIVE_TRACKS} from './track_actions';


export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_TRACKS = 'RECEIVE_ALBUM_TRACKS';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
export const LOADING_ALBUM = 'LOADING_ALBUM';
// export const RECEIVE_ALBUM_ARTISTS = 'RECEIVE_ALBUM_ARTISTS';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

const receiveAlbumTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const loadingTrue = () => ({
    type: LOADING_ALBUM
});

const receiveAlbumArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});


export const fetchAlbum = (id) => dispatch => {
    dispatch(loadingTrue());
    AlbumAPIUtil.fetchAlbum(id).then(payload => {
        dispatch(receiveAlbumArtists(payload.artists));
        dispatch(receiveAlbumTracks(payload.tracks));
        dispatch(receiveAlbum(payload.album));
    });
};