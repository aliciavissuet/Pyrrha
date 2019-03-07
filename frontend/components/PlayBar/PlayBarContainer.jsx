import {connect} from 'react-redux';
import PlayBar from './PlayBar';
import {fetchPlaybarPlaylist, fetchPlaybarSong} from '../../actions/PlayBarActions'; 

const mapStateToProps = state => ({
    currentTrack: state.currentlyPlaying.currentSong,
    currentPlaylist: state.currentlyPlaying.playQueue.list,
});
const mapDispatchToProps = dispatch => ({
    fetchPlaybarPlaylist: (id) => dispatch(fetchPlaybarPlaylist(id)),
    fetchPlaybarSong: (id)=> dispatch(fetchPlaybarSong(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);