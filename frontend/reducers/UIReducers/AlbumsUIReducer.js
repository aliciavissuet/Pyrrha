import { LOADING_ALBUM } from '../../actions/album_actions';
import merge from 'lodash/merge';
const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ALBUM:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};