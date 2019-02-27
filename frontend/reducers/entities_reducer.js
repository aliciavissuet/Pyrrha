import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    artists: ArtistsReducer,
});

export default entitiesReducer;