import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../../../common/Loading';
// import PlaylistHeader from './PlaylistHeader';
import cx from 'classnames';
import AlbumItem from './AlbumItem';


class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: null,
            artists: null,
            tracks: null,
            album: null,
            userId: null,
            show: false,
        };
        // this.removeSong = this.removeSong.bind(this);

    }
    componentDidMount() {
        console.log('hit playlist show');
        this.props.fetchAlbum(this.props.match.params.id);
        this.props.fetchUserPlaylists();
        const { playlists, artists, tracks, album, userId } = this.props;
        this.setState({ playlists, artists, tracks, album, userId});
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            console.log(this.props);
            const { artists, playlists, tracks, album, userId } = this.props;
            this.setState({ artists, tracks, album, playlists, userId });
        }
    }
    componentWillUnmount() {
        this.props.clear();
    }
    
    render() {


        const { addFollow, postStation, createPlaylist, addSongToPlaylist } = this.props;
        const { artists, album, tracks, playlists, userId } = this.state;
        const albumTitle = _.get(this, 'state.album.title', '');
        const albumTracks = _.values(tracks).map((track, i) => <li key={i}><AlbumItem 
                        track={track} 
                        addFollow={addFollow} 
                        postStation={postStation} 
                        playlists={playlists} 
                        userId={userId}
                        createPlaylist={createPlaylist}
                        addSongToPlaylist={addSongToPlaylist}/></li>)

        const at = (
            <ul>
                {albumTracks}
            </ul>
        )
        const content = (album) ? at : <Loading />
        const imgSrc = album ? album.photoUrl : ''
        const styles = {
           
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover'
            
        };
        return (
            <div className='playlist-show-container'>

                <div style={styles} className='playlist-show-left'>
                    {/* <img src={imgSrc} alt=""/> */}
                </div>
                <div className='playlist-show-right'>
                    <h1 className='album-show-header'>
                        {albumTitle}
                    </h1>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }

};

export default AlbumShow;