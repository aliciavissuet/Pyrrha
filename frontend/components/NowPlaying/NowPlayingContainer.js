import {connect} from 'react-redux';
import NowPlaying from './NowPlaying';
// import { stat } from 'fs';

const mapStateToProps = state => ({
    currentSong: state.currentlyPlaying.currentSong,
    list: state.currentlyPlaying.playQueue 

});
export default connect(mapStateToProps)(NowPlaying);