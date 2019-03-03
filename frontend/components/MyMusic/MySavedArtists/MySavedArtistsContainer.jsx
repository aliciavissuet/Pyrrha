import { connect } from 'react-redux';
import MySavedArtists from './MySavedArtists';
import { fetchAlbum, fetchArtists } from '../../../actions/artist_actions';
import { receiveCurrentUser } from '../../../actions/user_actions';
// import { postStation } from '../../../actions/station_actions';

const mapStateToProps = state => ({
    userId: state.session.currentUser,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    fetchUserArtists: (userId) => dispatch(fetchArtists(userId)),
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(MySavedArtists);
