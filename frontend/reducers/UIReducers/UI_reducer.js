import { combineReducers } from 'redux';
import UsersUIReducer from './UsersUIReducer';
import ArtistsUIReducer from './ArtistsUIReducer';
import TracksUIReducer from './TracksUIReducer';
import AlbumsUIReducer from './AlbumsUIReducer';
import StationsUIReducer from './StationsUIReducer';

const UIReducer = combineReducers({
    users: UsersUIReducer,
    artists: ArtistsUIReducer,
    tracks: TracksUIReducer,
    albums: AlbumsUIReducer,
    stations: StationsUIReducer
});

export default UIReducer;