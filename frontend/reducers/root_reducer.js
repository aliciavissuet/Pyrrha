import {combineReducers} from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import UIReducer from './UIReducers/UI_reducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: UIReducer,
    search: SearchReducer
});

export default rootReducer;