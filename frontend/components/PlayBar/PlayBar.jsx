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
            duration: null,
            progress: null,
            background: `#5d85c6`,
            hover: false,
            volume: 0.7,
            
             

        };
        this.playPause = this.playPause.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.onDuration = this.onDuration.bind(this);
        this.onProgress= this.onProgress.bind(this);
        this.setVolume = this.setVolume.bind(this);
        this.hover=this.hover.bind(this);
        this.hoverOff = this.hoverOff.bind(this);
    }
    componentDidMount(){
        this.props.fetchRecentPlays().then(()=> {
            if (Object.keys(this.props.recentlyPlayedStations).length) {
                const stations = this.props.recentlyPlayedStations;
                const station = Object.keys(stations).reduce(function (a, b) { return Date.parse(stations[a].createdAt) > Date.parse(stations[b].createdAt) ? a : b });
                this.props.fetchPlaybarStation(station);
                
            } else if (Object.keys(this.props.recentlyPlayedAlbums).length) {
                const albums = this.props.recentlyPlayedAlbums;
                const album = Object.keys(albums).reduce(function (a, b) { return Date.parse(albums[a].createdAt) > Date.parse(albums[b].createdAt) ? a : b });
                this.props.fetchPlaybarAlbum(album);
                
            } else if (Object.keys(this.props.recentlyPlayedPlaylists).length) {
                const playlists = this.props.recentlyPlayedPlaylists;
                const playlist = Object.keys(playlists).reduce(function (a, b) { return Date.parse(playlists[a].createdAt) > Date.parse(playlists[b].createdAt) ? a : b });
                this.props.fetchPlaybarPlaylist(playlist);
                
            } else {
                this.props.fetchPlaybarAlbum(1);
            }
        });
        

    }
    componentDidUpdate(prevProps){
        // console.log('updating playbar');
        if (this.props.currentTrack!==prevProps.currentTrack) {
            // console.log('props',this.props)
            const {currentTrack, currentPlaylist} = this.props;
            
            if (currentTrack.track){
                this.setState({
                    currentArtist: currentTrack.artist,
                    currentSong: currentTrack.track,
                    playlistQueue: currentPlaylist,
                    url: currentTrack.track.songUrl,
                    player: {playing: true},
                    background: currentTrack.color
                     
                    
                });
            }
        }
    }
    
    nextSong(){
        // const colors = [ `#4ba870`, `#b3d66d`, `#8e596d`, `#edc361`, `#469695`, `#416693`, `#3b277c`, `#0b5284`];
        const {currentTrack, currentPlaylist} = this.props;
        const {playlistIndex} = this.state;
        const i = this.state.playlistIndex;
        const id = currentPlaylist[(playlistIndex+1)%currentPlaylist.length];
        // console.log('id', id, currentPlaylist)
        this.props.fetchPlaybarSong(id);
        this.setState({ playlistIndex: (playlistIndex + 1) % currentPlaylist.length});
    }
    prevSong(){
        // if (this.state.progress && this.state.progress[0]===0 && this.state.progress[3]===0) {
        //     this.props.fetchPlaybarSong(this.state.currentSong.id);
        // } else {
            const { playlistIndex, playlistQueue } = this.state;
            const mod = (x, n) => (x % n + n) % n
            const id = playlistQueue[mod((playlistIndex - 1), playlistQueue.length)]; 
            this.props.fetchPlaybarSong(id);
            this.setState({ playlistIndex: mod((playlistIndex - 1), playlistQueue.length) });
          
    }
    onDuration(duration){
        let min = Math.floor(duration/60);
        let secs = Math.floor(duration % 60);
        secs = (secs < 10) ? `0${secs}` : secs;
        // console.log(secs)
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
        this.setState({hover: true});
    }
    hoverOff(){
        this.setState({hover: false})
    }
    render() {
            
        
        const styles = {
            background: this.state.background
        };
        const symbol = (!this.state.player.playing) ? <FontAwesomeIcon className='icon' icon={["fas", "play"]} onClick={this.playPause} /> :
            <FontAwesomeIcon className='icon' icon={["fas", "pause"]} onClick={this.playPause} />

        
        const vol = (this.state.hover) ? <input type="range" min={0} max={1} step='any' value={this.state.volume} onChange={this.setVolume} /> : '' 

        
        return (
            <div className='PlayBar' style={styles} onMouseLeave={this.hoverOff}>
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