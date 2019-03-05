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
    }
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    render() {
        const { artist, removeSave } = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown })

        const imgSrc = artist.photoUrl ? artist.photoUrl : '';
        const styles = {
            artistImg: {
                backgroundImage: `url(${imgSrc})` 
            }
        };
        return (
            <div className='track-item-top-level'>
                <div style={styles.artistImg} className='Track-item'>
                    <button className='more' onClick={this.toggle}>...</button>
                </div>
                <div className='track-item-text'>
                    <h1>{_.get(artist, 'name', 'No Title Found')}</h1>
                    <h2>Artist</h2>
                    <br />
                </div>

                <ul className={squareDD}>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    {/* <li id='dd'><button className='add-station'><FontAwesomeIcon icon={["fas", "headphones-alt"]} onClick={this.postStation} /> Start Station</button></li> */}
                    <li id='dd'><button className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} onClick={() => removeSave(artist.id)} />Unsave Artist</button></li>
                </ul>
            </div>
        );
    }
}

export default ArtistItem;