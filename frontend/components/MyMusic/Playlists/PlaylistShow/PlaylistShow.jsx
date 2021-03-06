import React, { Component } from 'react';
import _ from 'lodash';
import PlaylistTrackItem from './PlaylistTrackItem';
import Loading from '../../../common/Loading';
import PlaylistHeader from './PlaylistHeader';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: null,
            artists: null,
            tracks: null,
            albums: null,
            show: false,
        };
        this.removeSong = this.removeSong.bind(this);
        this.showNotification = this.showNotification.bind(this);
        this.addFollow = this.addFollow.bind(this);
    }
    componentDidMount() {
        // console.log('hit playlist show');
        this.props.fetchPlaylist(this.props.match.params.id);
        const { playlist, artists, tracks, albums, playlistLoading, userId } = this.props;
        this.setState({ playlist, artists, tracks, albums, playlistLoading, userId});
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { artists, tracks, albums, playlist } = this.props;
            this.setState({ artists, tracks, albums, playlist });
        }
    }
    showNotification() {
        document.getElementById("note").style.display = "block";
        setTimeout(function () {
            document.getElementById("note").style.display = "none";
        }, 3000);
    }
    componentWillUnmount(){
        this.props.clear();
    }
    addFollow(info){
        this.showNotification();
        this.props.addFollow(info);
    }
    removeSong(payload){
        const newTracks = this.state.tracks;
        delete newTracks[payload.trackId];
        this.setState({ tracks: newTracks });
        this.props.removeSong(payload);
    }
    


    render() {


        const { playlist, userId, addFollow, postStation, updatePlaylist, playSong, playPlaylist, } = this.props;
        const { artists, albums, tracks } = this.state;
        

        const playlistTracks = _.values(tracks).filter(tr => _.get(playlist, 'trackIds', []).includes(tr.id)).map((track, i) => <li key={i}><PlaylistTrackItem track={track} id={_.get(playlist, 'id', 'No ID')} addFollow={this.addFollow} userId={userId} removeSong={this.removeSong} postStation={postStation} playSong={playSong} album={albums[_.get(track, 'albumId', 'No ID')]}/></li>)
         
        const pl = (
            <ul>
                {playlistTracks}
            </ul>
        )

        const images = _.values(tracks).map((track) => `url(${_.get(track, 'photoUrl', 'none')})`).join(',');
        const styles = {
            artistImg: {
                backgroundImage: images,
                backgroundSize: 'cover'
            }
        };
        const content = (playlist) ? pl : <Loading />
        
        return (
            <div className='playlist-show-container'>
                
                <div style={styles.artistImg} className='playlist-show-left'>
                    <FontAwesomeIcon onClick={() => playPlaylist(playlist.id)} className='play-large-pt icon' icon={["fas", "play"]} />    
                </div>
                <div className='playlist-show-right'>
                    <PlaylistHeader playlist={playlist} updatePlaylist={updatePlaylist}/>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }

};

export default PlaylistShow;