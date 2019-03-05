import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import cx from 'classnames';

class PlaylistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    render() {
        const {playlist, deletePlaylist} = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown })

        return (
            <div className='track-item-top-level'>
                <div className='Track-item'>
                    <button className='more' onClick={this.toggle}>...</button>
                </div>
                <div className='track-item-text'>
                    <h1>{_.get(playlist, 'title', 'No Title Found')}</h1>
                    <h2>Playlist</h2>
                </div>

                <ul className={squareDD}>
                    <button className='delete-button' onClick={this.deleteStation}><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />Remove Station</button>

                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    {/* <li id='dd'><button className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} onClick={() => removeSave(track.id)} />Remove Station</button></li> */}
                </ul>
            </div>
        );
    }
}

export default PlaylistItem;