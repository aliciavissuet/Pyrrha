// import React, { Component } from 'react';
// import RecentlyPlayed from './RecentlyPlayed';

// class RecentlyPlayedContainer extends Component {
//     render() {
//         const played = [1, 2, 3, 4];
//         const displayPlayed = played.map((el, i) => {
//             return <li><RecentlyPlayed key={i} className='Track-item'/></li>
//         })
//         const content = (
//             <ul className='track-display-container'>
//                 {displayPlayed}
//             </ul>
//         )
//         return (
//             <div className='my-music-recently-played'>
//                 <h1 className='my-music-component-header'>Recently Played</h1>
//                 {content}
//             </div>
//         );
//     }
// }

// export default RecentlyPlayedContainer;
import {connect} from 'react-redux';
import RecentlyPlayed from './RecentlyPlayed';
import { fetchRecentPlays } from '../../../actions/PlayBarActions';

const mapStateToProps = state => ({
    albums: state.recentlyPlayed.albums,
    playlists: state.recentlyPlayed.playlists,
    stations: state.recentlyPlayed.stations,
    tracks: state.recentlyPlayed.tracks,
    ui: state.ui.recentlyPlayed
});

const mapDispatchToProps = dispatch => ({
    fetchRecent: () => dispatch(fetchRecentPlays())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyPlayed);

