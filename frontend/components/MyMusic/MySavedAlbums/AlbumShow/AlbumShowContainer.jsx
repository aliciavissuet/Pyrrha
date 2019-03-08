import { connect } from 'react-redux';
import _ from 'lodash';
import AlbumShow from './AlbumShow';
import {postStation} from '../../../../actions/station_actions'
import { clearEntities, fetchAlbum } from '../../../../actions/album_actions';
import { fetchUserPlaylistsOnly } from '../../../../actions/playlist_actions';
import { updateUserFollows } from '../../../../actions/user_actions';
import { fetchAlbumList, fetchSingleTrack } from '../../../../actions/PlayBarActions';

const mapStateToProps = (state, ownProps) => {
    const userId = state.session.currentUser;
    const albumId = ownProps.match.params.id;
    const album = state.entities.albums[albumId];
    const artists = state.entities.artists;
    const playlists = state.entities.playlists;
    const tracks = state.entities.tracks;
    const albumLoading = state.ui.albums.loading;
    return { album, artists, tracks, albumId, playlists, userId };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    // addFollow: (payload) => dispatch(addFollow(payload)),
    fetchUserPlaylists: () => dispatch(fetchUserPlaylistsOnly()),
    // removeTrackId: (info) => dispatch(removeTrackId(info)),
    postStation: (station) => dispatch(postStation(station)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    addSongToPlaylist: (pl) => dispatch(addPlaylistSong(pl)),
    clear: () => dispatch(clearEntities()),
    addFollow: (info) => dispatch(updateUserFollows(info)),
    playAlbum: (id) => dispatch(fetchAlbumList(id)),
    playSong: (id) => dispatch(fetchSingleTrack(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);