import { LOADING_RECENTLY_PLAYED } from '../../actions/recently_played_actions';
import merge from 'lodash/merge';
const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_RECENTLY_PLAYED:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};