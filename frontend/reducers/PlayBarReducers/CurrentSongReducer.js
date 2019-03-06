// import merge from 'lodash';
import {RECEIVE_PLAYBAR_SONG} from '../../actions/PlayBarActions';
import merge from 'lodash/merge';
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PLAYBAR_SONG:
            console.log(action.track)
            let track = action.track.tracks[action.track.playlist.trackIds[0]];
            let artist = action.track.artists[track.artistId];
            return {track, artist};
            // console.log(action.track);
            // const artist = action.track.artists[action.track.track.artist_id]
            // return state;
        default:
            return state;
    }
};