import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import {Link, Redirect} from 'react-router-dom';
import _ from 'lodash'

class TrackResultItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false,
            displayPlaylistDropDown: false,
        
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.followTrack = this.followTrack.bind(this);
        this.addTrackToPlaylist = this.addTrackToPlaylist.bind(this);
        this.createPlaylist = this.createPlaylist.bind(this);
        this.showPlDD = this.showPlDD.bind(this);
        this.hidePlDD = this.hidePlDD.bind(this);
        // this.handleRedirect = this.handleRedirect.bind(this);
    }
    
    toggle() {
        this.setState({displayDropdown: !this.state.displayDropdown});
    }
    postStation() {

        const { title, id } = this.props.track;
        const station_title = title + ' Station';
        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Track' })
        this.props.history.push('/my-music/stations');
        
        
    }
    followTrack(){
        const {userId, track} = this.props;
        const info = {userId: userId, type: 'Track', mediaId: track.id}
        this.props.addFollow(info);
    }
    showPlDD() {
        console.log('show')
        this.setState({ displayPlaylistDropDown: true})
    }
    hidePlDD() {
        this.setState({ displayPlaylistDropDown: false })
    }
    addTrackToPlaylist(id){
        const pl = {playlistId: id, trackId: this.props.track.id};
        this.props.addSongToPlaylist(pl);

    }
    createPlaylist(){
        let pl = {title: 'New Playlist', trackId: this.props.track.id}
        this.props.createPlaylist(pl);
    }
    render() {
        const {track, playlists, album} = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        const playlistDDClass = cx('hidePlDD', {'showPlDD': this.state.displayPlaylistDropDown});
        const playlists1 = _.values(playlists);
        const imgSrc = track.photoUrl ? track.photoUrl : '';
        const pL = playlists1.map((playlist, i) => {
            return (<button key={i} onClick={()=>this.addTrackToPlaylist(playlist.id)}>{playlist.title}</button>)
        });  
        
        return (
            <div>
                <div className='search-result-item'>
                    <div className='search-result-left'>
                        <img className='artist-tiny' src={imgSrc} alt="" />
                        <FontAwesomeIcon onClick={() => playTrack(id)} className='play-small icon' icon={["fas", "play"]} />
                       
                        <div className='span'>
                            <span className='search-result-title'>{track && track.title }</span>
                            <br />
                            <span className='search-result-type'>Song</span>
                        </div>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>
                        
                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]} className='icon'/>   Start station from song</button>
                    <div className='playlist-button' onMouseOver={this.showPlDD} onMouseLeave={this.hidePlDD}>
                        <button className='start-station'><FontAwesomeIcon icon={["fas", "bars"]} className='icon'/>   Add song to playlist > </button>
                        <div className={playlistDDClass}>
                            <button onClick={this.createPlaylist}><FontAwesomeIcon icon={["fas", "star-of-life"]} className='icon'/>Add Song to new playlist</button>
                            {pL}
                        </div>
                    </div>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "heart"]} />   Add song to My Music</button>
                    
                </div>
            </div>
        );
    }

    
};

export default TrackResultItem;
