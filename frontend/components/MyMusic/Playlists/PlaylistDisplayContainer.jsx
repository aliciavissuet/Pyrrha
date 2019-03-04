import {connect} from 'react-redux';
import {fetchPlaylists} from '../../../actions/playlist_actions';
import PlaylistDisplay from './PlaylistDisplay';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    playlists: state.entities.playlists,
    artists: state.entities.artists,
    albums: state.entities.albums,
    ui: state.ui.playlists
});

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDisplay);