// import * as RPApiUtil from '../utils/recent_play_util';
// export const LOADING_RECENTLY_PLAYED = 'LOADING_RECENTLY_PLAYED';
// export const RECEIVE_RECENT_PLAYLISTS = 'RECEIVE_RECENT_PLAYLIST';
// export const RECEIVE_RECENT_ALBUMS = 'RECEIVE_RECENT_ALBUM';
// export const RECEIVE_RECENT_TRACKS = 'RECEIVE_RECENT_TRACK';
// export const RECEIVE_RECENT_STATIONS = 'RECEIVE_RECENT_STATION';

// export const loadingTrueRecent = () => ({
//     type: LOADING_RECENTLY_PLAYED
// });

// export const receiveRecentPlaylists = (playlists) => ({
//     type: RECEIVE_RECENT_PLAYLISTS,
//     playlists 
// });
// export const receiveRecentAlbums = (albums) => ({
//     type: RECEIVE_RECENT_ALBUMS,
//     albums
// });
// export const receiveRecentTracks = (tracks) => ({
//     type: RECEIVE_RECENT_TRACKS,
//     tracks
// });
// export const receiveRecentStations = (stations) => ({
//     type: RECEIVE_RECENT_STATIONS,
//     stations
// });

// export const fetchRecentPlays = () => dispatch => {
//     dispatch(loadingTrueRecent());
//     RPApiUtil.fetchRecentPlays().then(payload => {
//         dispatch(receiveRecentPlaylists(payload.playlists));
//         dispatch(receiveRecentAlbums(payload.albums));
//         dispatch(receiveRecentStations(payload.stations));
//         dispatch(receiveRecentTracks(payload.tracks));
//     });
// };

// export const postRecentPlay = (recent) => dispatch => {
//     RPApiUtil.postRecentPlay(recent);
// };

