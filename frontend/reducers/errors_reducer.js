import {combineReducers} from 'redux';
import sessionErrorReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorReducer,
});

export default errorsReducer;