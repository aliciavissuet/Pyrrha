import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';
import TracksReducer from './tracks_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    artists: ArtistsReducer,
    tracks: TracksReducer
});

export default entitiesReducer;