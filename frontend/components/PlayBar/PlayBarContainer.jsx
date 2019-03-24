import {connect} from 'react-redux';
import PlayBar from './PlayBar';
import {fetchPlaybarPlaylist, fetchPlaybarSong, fetchAlbumList, fetchStationList, fetchRecentPlays, fetchSingleTrack} from '../../actions/PlayBarActions'; 

const mapStateToProps = state => ({
    recentlyPlayedAlbums: state.recentlyPlayed.albums,
    recentlyPlayedPlaylists: state.recentlyPlayed.playlists,
    recentlyPlayedStations: state.recentlyPlayed.stations,
    currentTrack: state.currentlyPlaying.currentSong,
    currentPlaylist: state.currentlyPlaying.playQueue.list,
    
});
const mapDispatchToProps = dispatch => ({
    fetchRecentPlays: () => dispatch(fetchRecentPlays()),
    fetchPlaybarPlaylist: (id) => dispatch(fetchPlaybarPlaylist(id)),
    fetchPlaybarAlbum: (id) => dispatch(fetchAlbumList(id)),
    fetchPlaybarStation: (id) => dispatch(fetchStationList(id)),
    fetchPlaybarSong: (id)=> dispatch(fetchSingleTrack(id)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayBar);