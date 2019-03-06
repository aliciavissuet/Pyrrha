import { LOADING_PLAYBAR} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';

const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PLAYBAR:
            return merge({}, state, { loading: true });
        default:
            return initialState;
    }
};