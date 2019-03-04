import {connect} from 'react-redux';
import TracksDisplay from './TracksDisplay';
import { postStation } from '../../../actions/station_actions';
import {fetchTracks, removeTrackFollow} from '../../../actions/track_actions';
import {clearEntities} from '../../../actions/album_actions';
const mapStateToProps = state => ({
    
    userId: state.session.currentUser,
    user: state.entities.users[state.session.currentUser],
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    removeTrackFollow: (tf) => dispatch(removeTrackFollow(tf)),
    fetchTracks: (userId) => dispatch(fetchTracks(userId)),
    postStation: (station) => dispatch(postStation(station)),
    clear: () => dispatch(clearEntities())
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksDisplay);
