import {combineReducers} from 'redux';
import RecentAlbumReducer from './RecentlyPlayedReducers/RecentAlbumReducer';
import RecentPlaylistReducer from './RecentlyPlayedReducers/ReccentPlaylistsReducer';
import RecentStationsReducer from './RecentlyPlayedReducers/RecentStationsReducer';
import RecentTracksReducer from './RecentlyPlayedReducers/RecentTracksReducer';

const RecentlyPlayedReducer = combineReducers({
    albums: RecentAlbumReducer,
    stations: RecentStationsReducer,
    tracks: RecentTracksReducer,
    playlists: RecentPlaylistReducer
});

export default RecentlyPlayedReducer;