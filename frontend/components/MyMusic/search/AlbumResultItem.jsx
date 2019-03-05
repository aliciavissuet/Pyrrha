import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class AlbumResultItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.followTrack = this.followTrack.bind(this);
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { title, id } = this.props.album;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Album' });
    }
    followTrack() {
        const { userId, album } = this.props;
        const info = { userId: userId, type: 'Album', mediaId: album.id }
        this.props.addFollow(info);
    }
    render() {
        const { album } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        return (
            <div>
                <div className='search-result-item'>
                    <div>
                        <span className='search-result-title'>{album && album.title}</span>
                        <br />
                        <span className='search-result-type'>Album</span>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "circle-notch"]} />   Start station from album</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} className='icon'/>   Add album to playlist</button>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "circle-notch"]} />   Add album to My Music</button>
                </div>
            </div>
        );
    }


};

export default AlbumResultItem;