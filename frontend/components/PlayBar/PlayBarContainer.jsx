import {connect} from 'react-redux';
import PlayBar from './PlayBar';

const mapStateToProps = state => ({
    currentTrack: {},
    currentPlaylist: []
});

export default connect(mapStateToProps)(PlayBar);