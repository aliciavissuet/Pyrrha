import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import cx from 'classnames';
class ArtistItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
    }
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    postStation(){
        const { name, id } = this.props.artist;
        const station_title = name + ' Station';
        // console.log('here');
        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Artist' });
    }
    render() {
        const { artist, removeSave } = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown })

        const imgSrc = artist.photoUrl ? artist.photoUrl : '';
        const styles = {
            artistImg: {
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover', 
            }
        };
        return (
            <div className='track-item-top-level'>
                <div style={styles.artistImg} className='Track-item'>
                </div>
                <button className='more' onClick={this.toggle}>...</button>
                <div className='track-item-text'>
                    <h1>{_.get(artist, 'name', 'No Title Found')}</h1>
                    <h2>Artist</h2>
                    <br />
                </div>

                <ul className={squareDD}>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    <li id='dd'><button className='add-station' onClick={this.postStation}><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]}/> Start Station</button></li>
                    <li id='dd'><button className='add-station' onClick={() => removeSave(artist.id)}><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]}  />Unsave Artist</button></li>
                </ul>
            </div>
        );
    }
}

export default ArtistItem;