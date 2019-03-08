import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import SearchNav from './SearchNav';
import TrackResultItem from './TrackResultItem';
import ArtistResultItem from './ArtistResultItem';
import AlbumResultItem from './AlbumResultItem';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MainSearch extends Component {
    constructor(props){
        super(props);
        let { tracks, albums, artists, searchResultType, postStation, addFollow, userId, playlists } = props;
        this.state = {
            tracks, albums, artists, playlists, userId, searchResultType, popup: false
        };
        this.addFollow=this.addFollow.bind(this);
        this.closePopup=this.closePopup.bind(this);
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
    addFollow(info){
        this.setState({popup: true});
        this.props.addFollow(info);
    }
    closePopup() {
        console.log('here')
        this.setState({ popup: false });
    }
    render() {
        const {postStation,  createPlaylist, playSong, playAlbum} = this.props;
        const { tracks, albums, artists, playlists, userId, searchResultType} = this.state;
        const trackResults = tracks.map((result, i) => <li key={i}><TrackResultItem albums={albums} track={result} postStation={postStation} addFollow={this.addFollow} userId={userId} playlists={playlists} addSongToPlaylist={this.props.addSongToPlaylist} createPlaylist={createPlaylist} playSong={playSong}/></li>)
        const albumResults = albums.map((result, i) => <li key={i}><AlbumResultItem album={result} postStation={postStation} addFollow={this.addFollow} userId={userId} playAlbum={playAlbum}/></li>)
        const artistResults = artists.map((result, i) => <li key={i}><ArtistResultItem artist={result} postStation={postStation} addFollow={this.addFollow} userId={userId}/></li>)
        const popup = cx('hide-popup-search', { 'popup-search': this.state.popup });

        return (
            
            <div className='search-lis'>
                {( searchResultType === 'tracks' || searchResultType === 'all' ) && trackResults }
                {(searchResultType === 'artists' || searchResultType === 'all') && artistResults }
                {(searchResultType === 'albums' || searchResultType === 'all' ) && albumResults }
                <div className={popup} onClick={this.closePopup}>
                    <div className='close' >
                        <p>x</p>
                    </div>
                    <div className='message'>
                        <FontAwesomeIcon className='icon' icon={["fas", "check"]} />
                        <p>Successful save</p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default MainSearch;