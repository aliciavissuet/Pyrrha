import {combineReducers} from 'redux';
import CurrentSongReducer from './PlayBarReducers/CurrentSongReducer';
import PlayQueueReducer from './PlayBarReducers/PlayQueueReducer';
    // currentSong: {},
   // -----
    // playQueue: [],
    // playArtists: {},
    // playAlbums: {},


const PlayBarReducer = combineReducers({
    currentSong: CurrentSongReducer,
    playQueue: PlayQueueReducer,
    
});
export default PlayBarReducer;
