import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import cx from 'classnames';
import {Link} from 'react-router-dom';

class PlaylistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdown: false,
            artist: this.props.artist
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    componentDidUpdate(prevProps) {
        console.log('playlist item', this.props);
        if (this.props!== prevProps) {
            this.setState({artist: this.props.artist});
        }
    }
    render() {
        const {playlist, deletePlaylist, play} = this.props;
        const {artist} = this.state;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown });
        
        const imgSrc = artist ? artist.photoUrl : '';
        const styles = {
            artistImg: {
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                
            }
        };
        return (
            <div className='track-item-top-level'>
                <div style={styles.artistImg} className='Track-item'>
                    <button className='more' onClick={this.toggle}>...</button>
                </div>
                <Link to={`/my-music/playlists/${playlist.id}`}><div className='track-item-text'>
                    <h1>{_.get(playlist, 'title', 'No Title Found')}</h1>
                    <h2>Playlist</h2>
                    <br />
                </div></Link>

                <ul className={squareDD}>
                    <button className='delete-button' onClick={this.deleteStation}><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />Remove Station</button>
                    <button className='delete-button' onClick={() => play(playlist.id)}><FontAwesomeIcon className='icon' icon={["fas", "play"]} />Play</button>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    {/* <li id='dd'><button className='add-station' onClick={this.postStation}><FontAwesomeIcon icon={["fas", "headphones-alt"]} /> Start Station</button></li> */}
                    {/* <li id='dd'><button className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} onClick={() => removeSave(artist.id)} />Unsave Artist</button></li> */}
                </ul>
            </div>
            
        );
    }
}

export default PlaylistItem;