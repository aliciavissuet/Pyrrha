import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import _ from 'lodash';
class TrackStationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            track: null,
            // tracks: null,
            // albums: null,
        
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { track, id} = this.props;
            this.setState({ track, id });
        }
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { title, id } = this.props.track;
        const station_title = title + ' Station';

        this.props.updateStation({ title: station_title, mediable_id: id, mediable_type: 'Track' });
    }
    removeMedia(){
        const { track, id } = this.state;
        const info = { func: 'Delete', mediable_id: _.get(track, 'id', 'No ID'), mediable_type: 'Track', id: id };
        this.props.updateStation(info);
        this.props.removeTrack(_.get(track, 'id', 'No ID'));
        
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
                    <button onClick={this.removeMedia} className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Remove song from station</button>
                    <button className='start-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} />   Add song to My Music</button>
                </div>
            </div>
        );
    }


};

export default TrackStationItem;