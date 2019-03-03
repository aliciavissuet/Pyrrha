import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class MediaItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { title, id } = this.props.track;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Track' });
    }
    render() {
        const { track } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        return (
            <div>
                <div className='search-result-item'>
                    <div>
                        <span className='search-result-title'>{track && track.title}</span>
                        <br />
                        <span className='search-result-type'>Song</span>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Start station from song</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to playlist</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to My Music</button>
                </div>
            </div>
        );
    }


};

export default TrackResultItem;