import React, { Component } from 'react';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';

class PlayBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: {
                playing: false,
                
                // background: `#5d85c6`,
            },
            url: null,
            currentSong: null,
            currentArtist: null,
            playlistIndex: 0,
            currentSongId: null,
            playlistQueue: [],
            duration: null,
            progress: null,
            background: `#5d85c6`,
            hover: false,
            volume: null

        };
        this.playPause = this.playPause.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.onDuration = this.onDuration.bind(this);
        this.onProgress= this.onProgress.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.hover=this.hover.bind(this);
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
                    player: {playing: true},
                     
                    
                });
            }
        }
    }
    
    nextSong(){
        const colors = [ `#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
        const {playlistIndex, playlistQueue} = this.state;
        const id = playlistQueue[(playlistIndex+1)%playlistQueue.length];
        this.props.fetchPlaybarSong(id);
        this.setState({ playlistIndex: (playlistIndex + 1) % playlistQueue.length, background: _.sample(colors)});
    }
    prevSong(){
        const colors = [`#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
        const { playlistIndex, playlistQueue } = this.state;
        const mod = (x, n) => (x % n + n) % n
        const id = playlistQueue[mod((playlistIndex - 1), playlistQueue.length)]; 
        this.props.fetchPlaybarSong(id);
        this.setState({ playlistIndex: mod((playlistIndex - 1), playlistQueue.length), background: _.sample(colors) });
    }
    onDuration(duration){
        let min = Math.floor(duration/60);
        let secs = Math.floor(duration % 60);
        secs = (secs < 10) ? `0${secs}` : secs;
        console.log(secs)
        this.setState({ duration: `${min}:${secs}`});
    }
    onProgress(progress){
        let min = Math.floor(progress.playedSeconds / 60);
        let secs = Math.floor(progress.playedSeconds % 60);
        secs = (secs < 10) ? `0${secs}` : secs;
        // console.log(min, secs)
        this.setState({ progress: `${min}:${secs}`});
    }
    
    playPause(){
        // console.log(this.state.player.playing);
        this.setState({player: {playing: !this.state.player.playing}});
    }

    setVolume(e) {
        this.setState({volume: parseFloat(e.target.value)});
    }
        
    hover(){
        this.setState({hover: !this.state.hover});
    }
    render() {
            
        
        const styles = {
            background: this.state.background
        };
        const symbol = (!this.state.player.playing) ? <FontAwesomeIcon className='icon' icon={["fas", "play"]} onClick={this.playPause} /> :
            <FontAwesomeIcon className='icon' icon={["fas", "pause"]} onClick={this.playPause} />

        
        const vol = (this.state.hover) ? <input type="range" min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume} /> : '' 

        
        return (
            <div className='PlayBar' style={styles} onMouseLeave={this.hover}>
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
                        volume={this.state.volume}
                        playing={this.state.player.playing}
                        width='0%'
                        height='0%'
                        loop={false}
                        onEnded={this.nextSong}
                        onDuration={this.onDuration}
                        onProgress = {this.onProgress}
                        
                    />
                </div>
                <div onMouseEnter={this.hover}  className='playbar-right'>
                    <h3>{this.state.progress} | {this.state.duration}</h3>
                    <div className='volume'>
                        <FontAwesomeIcon className='icon' icon={["fas", "volume-down"]}  />
                        <div>{vol}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayBar;