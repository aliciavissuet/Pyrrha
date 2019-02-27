import { RECEIVE_ARTIST_ERRORS } from '../actions/artist_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ARTIST_ERRORS:
            return action.errors;
        default:
            return state;

    }
};