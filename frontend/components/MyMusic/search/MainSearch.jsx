import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import SearchNav from './SearchNav';
import TrackResultItem from './TrackResultItem';
import ArtistResultItem from './ArtistResultItem';
import AlbumResultItem from './AlbumResultItem';

// const MainSearch = (props) => {
    
//     const {tracks, albums, artists, searchResultType, postStation, addFollow, userId, playlists} = props;
//     const trackResults = tracks.map((result, i) => <li key={i}><TrackResultItem track={result} postStation={postStation} addFollow={addFollow} userId={userId} playlists={playlists} addSongToPlaylist={props.addSongToPlaylist}/></li>)
//     const albumResults = albums.map((result, i) => <li key={i}><AlbumResultItem album={result} postStation={postStation} addFollow={addFollow} userId={userId}/></li>)
//     const artistResults = artists.map((result, i) => <li key={i}><ArtistResultItem artist={result} postStation={postStation} addFollow={addFollow} userId={userId}/></li>)
    

//     return (
//         <div className='search-lis'>
//             {( searchResultType === 'tracks' || searchResultType === 'all' ) && trackResults }
//             {(searchResultType === 'artists' || searchResultType === 'all') && artistResults }
//             {(searchResultType === 'albums' || searchResultType === 'all' ) && albumResults }
            
//         </div>
//     );
    
// }

// export default MainSearch;
// import React, { Component } from 'react';

class MainSearch extends Component {
    constructor(props){
        super(props);
        let { tracks, albums, artists, searchResultType, postStation, addFollow, userId, playlists } = props;
        this.state = {
            tracks, albums, artists, playlists, userId, searchResultType
        };
    }
    componentDidMount(){
        this.props.fetchPlaylists();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const { tracks, albums, artists, playlists, userId, searchResultType} = this.props;
            this.setState({ tracks, albums, artists, playlists, userId, searchResultType});
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    render() {
        const {postStation, addFollow, createPlaylist} = this.props;
        const { tracks, albums, artists, playlists, userId, searchResultType} = this.state;
        const trackResults = tracks.map((result, i) => <li key={i}><TrackResultItem albums={albums} track={result} postStation={postStation} addFollow={addFollow} userId={userId} playlists={playlists} addSongToPlaylist={this.props.addSongToPlaylist} createPlaylist={createPlaylist}/></li>)
        const albumResults = albums.map((result, i) => <li key={i}><AlbumResultItem album={result} postStation={postStation} addFollow={addFollow} userId={userId}/></li>)
        const artistResults = artists.map((result, i) => <li key={i}><ArtistResultItem artist={result} postStation={postStation} addFollow={addFollow} userId={userId}/></li>)
        return (
            
            <div className='search-lis'>
                {( searchResultType === 'tracks' || searchResultType === 'all' ) && trackResults }
                {(searchResultType === 'artists' || searchResultType === 'all') && artistResults }
                {(searchResultType === 'albums' || searchResultType === 'all' ) && albumResults }

            </div>
            
        );
    }
}

export default MainSearch;