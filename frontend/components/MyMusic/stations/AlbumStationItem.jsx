import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class AlbumStationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { title, id } = this.props.album;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Album' });
    }
    removeMedia() {
        const { album, id } = this.state;
        const info = { func: 'Delete', mediable_id: _.get(album, 'id', 'No ID'), mediable_type: 'Album', id: id };
        this.props.updateStation(info);
        this.props.removeTrack(_.get(album, 'id', 'No ID'));

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
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Start station from album</button>
                    <button onClick={this.removeMedia} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Remove album from station</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add album to My Music</button>
                </div>
            </div>
        );
    }


};

export default AlbumStationItem;