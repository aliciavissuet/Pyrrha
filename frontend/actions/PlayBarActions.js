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

export const fetchPlaybarSong = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchPlaybarSong(id).then(payload => {
        // console.log(payload);
        dispatch(receivePlaybarSong(payload));
    });
};

export const fetchPlaybarPlaylist = id => dispatch => {
    dispatch(loadingTrue());
    PBAPIUtil.fetchPlaylist(id).then(payload => {
        // const track = payload.tracks[payload.playlist.trackIds[0]];
        dispatch(receivePlaybarSong(payload));
        dispatch(receivePlaybarPlaylist(payload.playlist.trackIds));
    });
};