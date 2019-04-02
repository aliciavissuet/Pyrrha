export const RECEIVE_PLAYBAR_SONG = 'RECEIVE_NEXT_SONG';
export const RECEIVE_PLAYBAR_LIST = 'RECEIVE_PLAYBAR_LIST';
export const LOADING_PLAYBAR = 'LOADING_PLAYBAR';
import * as PBAPIUtil from '../utils/playbar_api_util';
import * as RPApiUtil from '../utils/recent_play_util';
// import { loadingTrueRecent} from './recently_played_actions';
// import {postRecentPlay} from '../utils/recent_play_util';
export const LOADING_RECENTLY_PLAYED = 'LOADING_RECENTLY_PLAYED';
export const RECEIVE_RECENT_PLAYLISTS = 'RECEIVE_RECENT_PLAYLIST';
export const RECEIVE_RECENT_ALBUMS = 'RECEIVE_RECENT_ALBUM';
export const RECEIVE_RECENT_TRACKS = 'RECEIVE_RECENT_TRACK';
export const RECEIVE_RECENT_STATIONS = 'RECEIVE_RECENT_STATION';
export const CLEAR_RECENT = 'CLEAR_RECENT';

const receivePlaybarSong = track => ({
    type: RECEIVE_PLAYBAR_SONG,
    track
});


const receivePlaybarPlaylist = (list, title) => ({
    type: RECEIVE_PLAYBAR_LIST,
    list, title
});

const loadingTrue = ()=> ({
    type: LOADING_PLAYBAR,

});
export const clearRecent = () =>({
    type: CLEAR_RECENT,
});

export const fetchSingleTrack = id => dispatch => {
    dispatch(loadingTrue());
    dispatch(loadingTrueRecent());
    const recent = {media_type: 'track', media_id: id};
    RPApiUtil.postRecentPlay(recent).then(payload => {
        dispatch(receiveRecentPlaylists(payload.playlists));
        dispatch(receiveRecentAlbums(payload.albums));
        dispatch(receiveRecentStations(payload.stations));
        dispatch(receiveRecentTracks(payload.tracks));
    });
    PBAPIUtil.fetchPlaybarSong(id).then(payload => {
        
        dispatch(receivePlaybarSong(payload));
        dispatch(receivePlaybarPlaylist([id], payload.track.title));
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
    dispatch(loadingTrueRecent());
    const recent = { media_type: 'album', media_id: id };
    RPApiUtil.postRecentPlay(recent).then(payload => {
        dispatch(receiveRecentPlaylists(payload.playlists));
        dispatch(receiveRecentAlbums(payload.albums));
        dispatch(receiveRecentStations(payload.stations));
        dispatch(receiveRecentTracks(payload.tracks));
    });
    PBAPIUtil.fetchAlbum(id).then(payload => {
        
        const track = payload.tracks[payload.album.trackIds[0]];
        const artist  = payload.artists[track.artistId];
        
        dispatch(receivePlaybarSong({ track, artist }));
        dispatch(receivePlaybarPlaylist(payload.album.trackIds, payload.album.title));
        
    });
};

export const fetchPlaybarPlaylist = id => dispatch => {
    dispatch(loadingTrueRecent());
    dispatch(loadingTrue());
    const recent = { media_type: 'playlist', media_id: id };
    RPApiUtil.postRecentPlay(recent).then(payload => {
        dispatch(receiveRecentPlaylists(payload.playlists));
        dispatch(receiveRecentAlbums(payload.albums));
        dispatch(receiveRecentStations(payload.stations));
        dispatch(receiveRecentTracks(payload.tracks));
    });
    PBAPIUtil.fetchPlaylist(id).then(payload => {
        const track = payload.tracks[payload.playlist.trackIds[0]];
        const artist = payload.artists[track.artistId];
        
        dispatch(receivePlaybarSong({track, artist}));
        dispatch(receivePlaybarPlaylist(payload.playlist.trackIds, payload.playlist.title));
    });
};

export const fetchStationList = id => dispatch => {
    dispatch(loadingTrue());
    dispatch(loadingTrueRecent());
    const recent = { media_type: 'station', media_id: id };
    RPApiUtil.postRecentPlay(recent).then(payload => {
        dispatch(receiveRecentPlaylists(payload.playlists));
        dispatch(receiveRecentAlbums(payload.albums));
        dispatch(receiveRecentStations(payload.stations));
        dispatch(receiveRecentTracks(payload.tracks));
    });
    PBAPIUtil.fetchStation(id).then(payload => {
        // console.log('payload', payload)
        const track = payload.tracks[payload.trackIds[0]];
        const artist = payload.artists[track.artistId];
        
        dispatch(receivePlaybarSong({ track, artist }));
        dispatch(receivePlaybarPlaylist(payload.trackIds, payload.station.title));
    });
}




export const loadingTrueRecent = () => ({
    type: LOADING_RECENTLY_PLAYED
});

export const receiveRecentPlaylists = (playlists) => ({
    type: RECEIVE_RECENT_PLAYLISTS,
    playlists
});
export const receiveRecentAlbums = (albums) => ({
    type: RECEIVE_RECENT_ALBUMS,
    albums
});
export const receiveRecentTracks = (tracks) => ({
    type: RECEIVE_RECENT_TRACKS,
    tracks
});
export const receiveRecentStations = (stations) => ({
    type: RECEIVE_RECENT_STATIONS,
    stations
});

export const fetchRecentPlays = () => dispatch => {
    dispatch(loadingTrueRecent());
    // dispatch(clearRecent());
    
    return RPApiUtil.fetchRecentPlays().then(payload => {
        // console.log('payload', payload);
        dispatch(receiveRecentPlaylists(payload.playlists));
        dispatch(receiveRecentAlbums(payload.albums));
        dispatch(receiveRecentStations(payload.stations));
        dispatch(receiveRecentTracks(payload.tracks));
    });
};