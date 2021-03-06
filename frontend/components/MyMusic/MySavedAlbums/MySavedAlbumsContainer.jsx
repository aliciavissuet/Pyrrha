import { connect } from 'react-redux';
import MySavedAlbums from './MySavedAlbums'
import { fetchAlbum, fetchAlbums, removeAlbumFollow, clearEntities } from '../../../actions/album_actions';
import { receiveCurrentUser } from '../../../actions/user_actions';
import { fetchAlbumList } from '../../../actions/PlayBarActions';
import { postStation } from '../../../actions/station_actions';

const mapStateToProps = state => ({
    
    userId: state.session.currentUser,
    user: state.entities.users[state.session.currentUser],
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    removeAlbumFollow: (af) => dispatch(removeAlbumFollow(af)),
    fetchUserAlbums: (userId) => dispatch(fetchAlbums(userId)),
    postStation: (station) => dispatch(postStation(station)),
    clear: () => dispatch(clearEntities()),
    playAlbum: (id) => dispatch(fetchAlbumList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MySavedAlbums);
