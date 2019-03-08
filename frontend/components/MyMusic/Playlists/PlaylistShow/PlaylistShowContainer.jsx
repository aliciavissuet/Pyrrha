import { connect } from 'react-redux';
import _ from 'lodash';
import PlaylistShow from './PlaylistShow';
// import { fetchStation, updateStation, removeTrackId } from '../../../actions/station_actions';
import { fetchPlaylist, removePlaylistSong, updatePlaylist} from '../../../../actions/playlist_actions';
import {updateUserFollows} from '../../../../actions/user_actions';
import {clearEntities} from '../../../../actions/album_actions';
import { fetchPlaybarPlaylist, fetchSingleTrack } from '../../../../actions/PlayBarActions';

const mapStateToProps = (state, ownProps) => {
    const playlistId = ownProps.match.params.id;
    const playlist = state.entities.playlists[playlistId];
    const artists = state.entities.artists;
    const albums = state.entities.albums;
    const tracks = state.entities.tracks;
    const playlistLoading = state.ui.playlists.loading;
    const userId = state.session.currentUser;
    return { playlist, artists, tracks, albums, playlistLoading, userId };
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    addFollow: (payload) => dispatch(updateUserFollows(payload)),
    removeSong: (payload) => dispatch(removePlaylistSong(payload)),
    postStation: (station) => dispatch(postStation(station)),
    clear: () => dispatch(clearEntities()),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    playPlaylist: (id) => dispatch(fetchPlaybarPlaylist(id)),
    playSong: (id) => dispatch(fetchSingleTrack(id)),
    // updateStation: (info) => dispatch(updateStation(info)),
    // removeTrackId: (info) => dispatch(removeTrackId(info)),
    // search: (term) => dispatch(fetchSearchResults(term)),
    // clearSearch: () => dispatch(clearSearch())
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);