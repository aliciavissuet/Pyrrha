import {connect} from 'react-redux';
import TracksDisplay from './TracksDisplay';
import { postStation } from '../../../actions/station_actions';
import {fetchTracks} from '../../../actions/track_actions'
const mapStateToProps = state => ({
    userId: state.session.currentUser,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    fetchTracks: (userId) => dispatch(fetchTracks(userId)),
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksDisplay);
