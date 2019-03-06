import {connect} from 'react-redux';
import {fetchPlaylists, deletePlaylist} from '../../../actions/playlist_actions';
import PlaylistDisplay from './PlaylistDisplay';
import { clearEntities } from '../../../actions/album_actions';
import { fetchPlaybarPlaylist } from '../../../actions/PlayBarActions';

const mapStateToProps = state => ({
    user: state.entities.users[state.session.currentUser],
    playlists: state.entities.playlists,
    artists: state.entities.artists,
    albums: state.entities.albums,
    ui: state.ui.playlists
});

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    removePlaylist: (id) => dispatch(deletePlaylist(id)),
    clear: () => dispatch(clearEntities()),
    fetchPlaybarPlaylist: (id) => dispatch(fetchPlaybarPlaylist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDisplay);