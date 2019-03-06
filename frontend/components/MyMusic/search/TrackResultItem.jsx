import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import {Link} from 'react-router-dom';

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
    }
    toggle() {
        this.setState({displayDropdown: !this.state.displayDropdown});
    }
    postStation() {

        const { title, id } = this.props.track;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Track' });
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
        const imgSrc = album ? album.photoUrl : '';
        const pL = playlists1.map((playlist, i) => {
            return (<button key={i} onClick={()=>this.addTrackToPlaylist(playlist.id)}>{playlist.title}</button>)
        });  
        
        return (
            <div>
                <div className='search-result-item'>
                    <div>
                        <img className='artist-tiny' src={imgSrc} alt="" />                        
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
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} className='icon'/>   Start station from song</button>
                    <div className='playlist-button' onMouseOver={this.showPlDD} onMouseLeave={this.hidePlDD}>
                        <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} className='icon'/>   Add song to playlist > </button>
                        <div className={playlistDDClass}>
                            <button onClick={this.createPlaylist}>Add Song to new playlist</button>
                            {pL}
                        </div>
                    </div>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "circle-notch"]} />   Add song to My Music</button>
                    
                </div>
            </div>
        );
    }

    
};

export default TrackResultItem;
