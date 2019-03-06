import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import cx from 'classnames';
import {Link} from 'react-router-dom';
// import { removeAlbumFollow } from '../../../actions/album_actions';
class AlbumItem extends Component {
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
    postStation() {
        const { title, id } = this.props.album;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Album' });
    }
    render() {
        const { album, artist, removeSave, userId } = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown })
        const imgSrc = album ? album.photoUrl : '';
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
                <Link to={`/my-music/albums/${_.get(album, 'id', 'No Title Found')}`}><div className='track-item-text'>
                    <h1>{_.get(album, 'title', 'No Title Found')}</h1>
                    <h2>{_.get(artist, 'name', 'No Name Found')}</h2>
                    <h2>Album</h2>
                </div></Link>

                <ul className={squareDD}>
                    <li id='dd'><button onClick={this.postStation} className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]}  /> Start Station</button></li>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    <li id='dd'><button onClick={() => removeSave(album.id)} className='add-station'> <FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]}  /> Unsave Album</button></li>
                </ul>
            </div>
        );
    }
}

export default AlbumItem;