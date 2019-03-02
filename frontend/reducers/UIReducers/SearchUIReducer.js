import { LOADING_SEARCH } from '../../actions/search_actions';
import merge from 'lodash/merge';

const initialState = {loading: false}

export default (state = {}, action) => {
    switch (action.type) {
        case LOADING_SEARCH:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};