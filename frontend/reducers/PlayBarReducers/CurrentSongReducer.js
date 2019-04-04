// import merge from 'lodash';
import {RECEIVE_PLAYBAR_SONG} from '../../actions/PlayBarActions';
// import merge from 'lodash/merge';
import _ from 'lodash'
const initialState = {};
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PLAYBAR_SONG:
        
            // const colors = [`#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
            const colors = {
                'a': `#4ba870`,
                'b': `#b3d66d`,
                'c': `#8e596d`,
                'd': `#edc361`,
                'e': `#469695`,
                'f': `#416693`,
                'g': `#3b277c`,
                'h': `#0b5284`,
                'i': `#750331`,
                'j': `#072663`,
                'k': `#0d6b4d`,
                'l': `#2f6984`,
                'o': `#6d2562`,
                'm': `#5b515a`,
                'p': `#465b16`,
                'q': `#408dc4`,
                'r': `#630456`,
                's': `#3d0107`,
                't': `#33053a`,
                'u': `#442f47`,
                'v': `#51602f`,
                'w': `#c2c651`,
                'x': `#7f23bc`,
                'z': `#3b01b7`          
            };
            // color = _.sample(colors);
            // console.log('track', action.track);
            let track = action.track.track;
            let color = colors[track.title[0].toLowerCase()];
            // console.log('first letter', track.title[0]);
            let artist = action.track.artist;
            return {track, artist, color};
           
        default:
            return state;
    }
};