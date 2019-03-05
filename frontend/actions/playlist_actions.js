import * as PlaylistAPIUtil from '../utils/playlist_api_util';
import { RECEIVE_TRACKS } from './track_actions';
import { RECEIVE_ARTISTS } from './artist_actions';
import { RECEIVE_ALBUMS } from './album_actions';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const LOADING_PLAYLIST = 'LOADING_PLAYLIST';

const loadingTrue = () => ({
    type: LOADING_PLAYLIST,
});

const receivePlaylistAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receivePlaylistArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

const receivePlaylistTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

const receivePlaylists = playlists => ({
    type: RECEIVE_PLAYLISTS, 
    playlists
});

// export const playPlaylist = id => dispatch => {
//     dispatch(loadingTrue());
//     PlaylistAPIUtil.fetchPlaylist(id).then(payload => {
//         //set current song
//         //set current play queue
//         //set current artist
//     }
// };

export const createPlaylist = (playlist) => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.postPlaylist(playlist).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylist(payload.playlist));
    });
};
export const fetchPlaylists = () => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.fetchPlaylists().then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylists(payload.playlists));
    });
};

export const fetchPlaylist = (id) => dispatch => {
    console.log('playlist actions')
    dispatch(loadingTrue());
    PlaylistAPIUtil.fetchPlaylist(id).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylist(payload.playlist));
    });
}

export const addPlaylistSong = (pt) => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.addSongToPlaylist(pt).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylist(payload.playlist));
    });
}

export const removePlaylistSong = (pt) => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.removeSongFromPlaylist(pt).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylist(payload.playlist));
    });
}
export const deletePlaylist = (id) => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.removePlaylist(id).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylists(payload.playlists));
    });
}

export const updatePlaylist = (playlist) => dispatch => {
    dispatch(loadingTrue());
    PlaylistAPIUtil.updatePlaylist(playlist).then(payload => {
        dispatch(receivePlaylistTracks(payload.tracks));
        dispatch(receivePlaylistAlbums(payload.albums));
        dispatch(receivePlaylistArtists(payload.artists));
        dispatch(receivePlaylist(payload.playlist));
    });
};