import { connect } from 'react-redux';
import MySavedArtists from './MySavedArtists';
import { fetchAlbum, fetchArtists, removeArtistFollow } from '../../../actions/artist_actions';
import { receiveCurrentUser } from '../../../actions/user_actions';
// import { postStation } from '../../../actions/station_actions';

const mapStateToProps = state => ({
    userId: state.session.currentUser,
    user: state.entities.users[state.session.currentUser],
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    fetchUserArtists: (userId) => dispatch(fetchArtists(userId)),
    removeArtistFollow: (af) => dispatch(removeArtistFollow(af)),
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(MySavedArtists);
