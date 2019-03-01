import {LOADING_ARTIST} from '../../actions/artist_actions';
import merge from 'lodash/merge';
const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ARTIST:
            return merge({}, state, { loading: true });
        default:
            return state;
    }
};