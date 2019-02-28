import {connect} from 'react-redux';
import TracksDisplay from './TracksDisplay';
import { fetchAlbum } from '../../../actions/album_actions';

const mapStateToProps = state => ({
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists
});

const mapDispatchToProps = dispatch => ({
    fetchAlbumTracks: (id) => dispatch(fetchAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksDisplay);
