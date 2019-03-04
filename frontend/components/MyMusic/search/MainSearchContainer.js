import {connect} from 'react-redux';
import _ from 'lodash';
import MainSearch from './MainSearch';
import { updateUserFollows } from '../../../actions/user_actions';
import { addPlaylistSong} from '../../../actions/playlist_actions';

const mapStateToProps = state => ({
    albums: Object.values(state.search.albums),
    artists: Object.values(state.search.artists),
    tracks: Object.values(state.search.tracks),
    playlists: _.get(state, 'entities.playlists', {}),
    userId: state.session.currentUser
    
});

const mapDispatchToProps = dispatch => ({
    postStation: (station) => dispatch(postStation(station)),
    addFollow: (payload) => dispatch(updateUserFollows(payload)),
    addSongToPlaylist: (pl) => dispatch(addPlaylistSong(pl))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);