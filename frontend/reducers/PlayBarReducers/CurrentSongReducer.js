// import merge from 'lodash';
import {RECEIVE_PLAYBAR_SONG} from '../../actions/PlayBarActions';
// import merge from 'lodash/merge';
import _ from 'lodash'
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PLAYBAR_SONG:
            const colors = [`#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
            let color =  _.sample(colors);
            console.log('track', action.track);
            let track = action.track.track;
            let artist = action.track.artist;
            return {track, artist, color};
           
        default:
            return state;
    }
};