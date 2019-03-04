import {LOADING_PLAYLIST} from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const initialState = {
    loading: false
};

export default (state=initialState, action)=> {
    switch(action.type) {
        case LOADING_PLAYLIST:
            return merge({}, state, { loading: true } );
        default:
            return initialState;
    }
}