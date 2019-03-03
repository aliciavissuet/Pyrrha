import {LOADING_ARTIST} from '../../actions/artist_actions';
import merge from 'lodash/merge';
// import { RECEIVE_SEARCH_ARTISTS } from '../../actions/search_actions';
const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ARTIST:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};