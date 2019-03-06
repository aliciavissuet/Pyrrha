import React, { Component } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';

class PlayBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: {
                playing: true,
                
                // background: `#5d85c6`,
            },
            url: null,
            currentSong: null,
            currentArtist: null,
            playlistIndex: 0,
            currentSongId: null,
            playlistQueue: [],
        };
        this.playPause = this.playPause.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
    }
    componentDidUpdate(prevProps){
        // console.log('updating playbar');
        if (this.props!==prevProps) {
            const {currentTrack, currentPlaylist} = this.props;
            if (currentTrack.track){
                this.setState({
                    currentArtist: currentTrack.artist,
                    currentSong: currentTrack.track,
                    playlistQueue: currentPlaylist,
                    url: currentTrack.track.songUrl,
                });
            }
        }
    }
    nextSong(){
        
        const {playlistIndex, playlistQueue} = this.state;
        const id = playlistQueue[(playlistIndex+1)%playlistQueue.length];
        this.props.fetchPlaybarSong(id);
        this.setState({playlistIndex: playlistIndex+1});
    }
    prevSong(){
        const { playlistIndex, playlistQueue } = this.state;
        const id = playlistQueue[(playlistIndex-1) % playlistQueue.length];
        this.props.fetchPlaybarSong(id);
        this.setState({ playlistIndex: playlistIndex + 1 });
    }
    
    // this.props.currentPlaylist
    // this.props.songIds[(this.state.playlistIndex) ? this.state.playlistIndex : 0],
    // componentDidUpdate(prevProps){
    //     if (this.props!== prevProps){
            
    //     }
    // }
    playPause(){
        // console.log(this.state.player.playing);
        this.setState({player: {playing: !this.state.player.playing}});
    }
    

    render() {
                    
        const colors = [`#5d85c6`, `#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
        const styles = {
            background: _.sample(colors)
        };
        const symbol = (!this.state.player.playing) ? <FontAwesomeIcon className='icon' icon={["fas", "play"]} onClick={this.playPause} /> :
            <FontAwesomeIcon className='icon' icon={["fas", "pause"]} onClick={this.playPause} />


        return (
            <div className='PlayBar' style={styles}>
                <div className='playbar-left'>
                    <img className='playbar-image' src={this.state.currentArtist ? this.state.currentArtist.photoUrl : ''} alt=""/>
                    <div className='playbar-left-info'>
                        <h2>{this.state.currentSong? this.state.currentSong.title : ''}</h2>
                        <h2>{this.state.currentSong? this.state.currentArtist.name : ''}</h2>
                    </div>
                </div>
                <div className='playbar-middle'>
                    <FontAwesomeIcon  onClick={this.prevSong} className='icon' icon={["fas", "fast-backward"]} />
                    {symbol}
                    <FontAwesomeIcon onClick={this.nextSong} className='icon' icon={["fas", "fast-forward"]} />
                    <ReactPlayer 
                        url={this.state.url}
                        volume={0.9}
                        playing={this.state.player.playing}
                        width='0%'
                        height='0%'
                        loop={false}
                        onEnded={this.nextSong}
                        
                    />
                </div>
                <div className='playbar-right'>
                    <h3>time</h3>
                    <FontAwesomeIcon className='icon' icon={["fas", "volume-down"]} />
                </div>
            </div>
        );
    }
}

export default PlayBar;