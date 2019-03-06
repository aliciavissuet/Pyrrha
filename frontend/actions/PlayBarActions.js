export const RECEIVE_PLAYBAR_SONG = 'RECEIVE_NEXT_SONG';
export const RECEIVE_PLAYBAR_LIST = 'RECEIVE_PLAYBAR_LIST';
export const LOADING_PLAYBAR = 'LOADING_PLAYBAR';
import * as PBAPIUtil from '../utils/playbar_api_util';

const receivePlaybarSong = track => ({
    type: RECEIVE_PLAYBAR_SONG,
    track
});


const receivePlaybarPlaylist = list => ({
    type: RECEIVE_PLAYBAR_LIST,
    list
});

const loadingTrue = ()=> ({
    type: LOADING_PLAYBAR,

});

export const fetchSingleTrack = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchPlaybarSong(id).then(payload => {
        dispatch(receivePlaybarSong(payload));
        dispatch(receivePlaybarPlaylist([id]));
    });
};

export const fetchPlaybarSong = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchPlaybarSong(id).then(payload => {
        // console.log(payload);
        dispatch(receivePlaybarSong(payload));
    });
};

export const fetchAlbumList = id=> dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchAlbum(id).then(payload => {
        console.log(payload)
        const track = payload.tracks[payload.album.trackIds[0]];
        const artist  = payload.artists[track.artistId];
        dispatch(receivePlaybarSong({ track, artist }));
        dispatch(receivePlaybarPlaylist(payload.album.trackIds));
    });
};

export const fetchPlaybarPlaylist = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchPlaylist(id).then(payload => {
        const track = payload.tracks[payload.playlist.trackIds[0]];
        const artist = payload.artists[track.artistId];
        dispatch(receivePlaybarSong({track, artist}));
        dispatch(receivePlaybarPlaylist(payload.playlist.trackIds));
    });
};

export const fetchStationList = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchStation(id).then(payload => {
        const track = payload.tracks[payload.trackIds[0]];
        const artist = payload.artists[track.artistId];
        dispatch(receivePlaybarSong({ track, artist }));
        dispatch(receivePlaybarPlaylist(payload.trackIds));
    });
}