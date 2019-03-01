import {connect} from 'react-redux';
import TracksDisplay from './TracksDisplay';
import { fetchAlbum } from '../../../actions/album_actions';
import { postStation } from '../../../actions/station_actions';

const mapStateToProps = state => ({
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    fetchAlbumTracks: (id) => dispatch(fetchAlbum(id)),
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksDisplay);
