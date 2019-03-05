import { connect } from 'react-redux';
import _ from 'lodash';
import AlbumItem from './AlbumItem';
// import { fetchStation, updateStation, removeTrackId } from '../../../actions/station_actions';
import { fetchPlaylists, addPlaylistSong, createPlaylist } from '../../../../actions/playlist_actions';
import { updateUserFollows } from '../../../../actions/user_actions';
import { clearEntities } from '../../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
    
    const playlists = state.entities.playlists;
    const artists = state.entities.artists;
    const albums = state.entities.albums;
    const track = ownProps.track;
    
    
    return { playlists, artists, track, albums };
};

const mapDispatchToProps = dispatch => ({
    addSongToPlaylist: (song) => dispatch(addPlaylistSong(song)),
    fetchPlaylists: (id) => dispatch(fetchPlaylists(id)),
    addFollow: (payload) => dispatch(updateUserFollows(payload)),
    postStation: (station) => dispatch(postStation(station)),
    clear: () => dispatch(clearEntities()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumItem);