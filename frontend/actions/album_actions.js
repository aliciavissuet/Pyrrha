import * as AlbumAPIUtil from '../utils/album_api_util';


export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_TRACKS = 'RECEIVE_ALBUM_TRACKS';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

const receiveAlbumTracks = tracks => ({
    type: RECEIVE_ALBUM_TRACKS,
    tracks
});

export const fetchAlbum = (id) => dispatch => (
    AlbumAPIUtil.fetchAlbum(id).then(album => {
        dispatch(receiveAlbum(album.album));
        dispatch(receiveAlbumTracks(album.tracks));
    })
);