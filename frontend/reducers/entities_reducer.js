import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';
import TracksReducer from './tracks_reducer';
import AlbumsReducer from './albums_reducer';
import StationsReducer from './stations_reducer';
import PlaylistReducer from './PlaylistReducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    artists: ArtistsReducer,
    tracks: TracksReducer,
    albums: AlbumsReducer,
    stations: StationsReducer,
    playlists: PlaylistReducer 
});

export default entitiesReducer;