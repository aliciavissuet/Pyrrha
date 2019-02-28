import {connect} from 'react-redux';
const mapStateToProps = state => ({
    tracks: Object.values(state.tracks),
    artists: Object.values(state.artists)
});

export default connect(mapStateToProps)(DisplayTracks);
