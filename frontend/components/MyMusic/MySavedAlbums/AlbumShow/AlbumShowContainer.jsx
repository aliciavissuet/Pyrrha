import { connect } from 'react-redux';
import _ from 'lodash';
import AlbumShow from './AlbumShow';
import {postStation} from '../../../../actions/station_actions'
import { clearEntities, fetchAlbum } from '../../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
    const albumId = ownProps.match.params.id;
    const album = state.entities.albums[albumId];
    const artists = state.entities.artists;
    const albums = state.entities.albums;
    const tracks = state.entities.tracks;
    const albumLoading = state.ui.albums.loading;
    return { album, artists, tracks, albumId };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    addFollow: (payload) => dispatch(addFollow(payload)),
    removeTrackId: (info) => dispatch(removeTrackId(info)),
    postStation: (station) => dispatch(postStation(station)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    addSongToPlaylist: (pl) => dispatch(addPlaylistSong(pl)),
    clear: () => dispatch(clearEntities())
});


export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);