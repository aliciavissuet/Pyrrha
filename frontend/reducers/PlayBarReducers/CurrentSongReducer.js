// import merge from 'lodash';
import {RECEIVE_PLAYBAR_SONG} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PLAYBAR_SONG:
            console.log('track', action.track);
            let track = action.track.track;
            let artist = action.track.artist;
            return {track, artist};
           
        default:
            return state;
    }
};