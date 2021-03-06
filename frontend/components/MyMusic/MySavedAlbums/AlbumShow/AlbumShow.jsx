import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../../../common/Loading';
// import PlaylistHeader from './PlaylistHeader';
import cx from 'classnames';
import AlbumItem from './AlbumItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
            popup: false,
            popup2: false,
        };
        this.closePopup = this.closePopup.bind(this);
        this.addFollow=this.addFollow.bind(this);
        this.addSongToPlaylist=this.addSongToPlaylist.bind(this);
        this.showNotification = this.showNotification.bind(this);
        // this.addFollow = this
        // this.removeSong = this.removeSong.bind(this);

    }
    

    componentDidMount() {
        // console.log('hit playlist show');
        this.props.fetchAlbum(this.props.match.params.id);
        this.props.fetchUserPlaylists();
        const { playlists, artists, tracks, album, userId } = this.props;
        this.setState({ playlists, artists, tracks, album, userId});
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            // console.log(this.props);
            const { artists, playlists, tracks, album, userId } = this.props;
            this.setState({ artists, tracks, album, playlists, userId });
        }
    }
    componentWillUnmount() {
        this.props.clear();
    }
    showNotification() {
        document.getElementById("note").style.display = "block";
        setTimeout(function () {
            document.getElementById("note").style.display = "none";
        }, 3000);
    }
    showNotification2() {
        document.getElementById("note2").style.display = "block";
        setTimeout(function () {
            document.getElementById("note2").style.display = "none";
        }, 3000);
    }
    closePopup() {
        // console.log('here')
        this.setState({ popup: false, popup2: false });
    }
    addFollow(info) {
        // this.setState({ popup: true });
        this.showNotification();
        this.props.addFollow(info);
    }
    addSongToPlaylist(info){
        // this.setState({popup2: true});
        this.showNotification2();
        this.props.addSongToPlaylist(info);
    }
    render() {


        const { addFollow, postStation, createPlaylist, addSongToPlaylist } = this.props;
        const { artists, album, tracks, playlists, userId } = this.state;
        const albumTitle = _.get(this, 'state.album.title', '');
        const albumTracks = _.values(tracks).filter(tr => _.get(album, 'trackIds', []).includes(tr.id)).map((track, i) => <li key={i}><AlbumItem 
                        track={track} 
                        addFollow={this.addFollow} 
                        postStation={postStation} 
                        playlists={playlists} 
                        userId={userId}
                        createPlaylist={createPlaylist}
                        addSongToPlaylist={this.addSongToPlaylist}
                        playSong={this.props.playSong}/></li>)
                        

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
        const popup = cx('hide-popup-search', { 'popup-search': this.state.popup });
        const popup2 = cx('hide-popup-search-2', { 'popup-search-2': this.state.popup2 });

        return (
            <div className='playlist-show-container'>

                <div style={styles} className='playlist-show-left'>
                    <FontAwesomeIcon onClick={() => this.props.playAlbum(album.id)} className='play-large-pt icon' icon={["fas", "play"]} />    
                </div>
                <div className='playlist-show-right'>
                    <h1 className='album-show-header'>
                        {albumTitle}
                    </h1>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
                <div className={popup} onClick={this.closePopup}>
                    <div className='close' >
                        <p>x</p>
                    </div>
                    <div className='message'>
                        <FontAwesomeIcon className='icon' icon={["fas", "check"]} />
                        <p>Successful save</p>
                    </div>
                </div>
                <div className={popup2} onClick={this.closePopup}>
                    <div className='close' >
                        <p>x</p>
                    </div>
                    <div className='message'>
                        <FontAwesomeIcon className='icon' icon={["fas", "check"]} />
                        <p>Song added</p>
                    </div>
                </div>
            </div>
        );
    }

};

export default AlbumShow;