import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import _ from 'lodash';
class PlaylistTrackItem extends React.Component {
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
        this.followTrack = this.followTrack.bind(this);
        this.removeSong = this.removeSong.bind(this);
        this.postStation = this.postStation.bind(this);
        // this.removeMedia = this.removeMedia.bind(this);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { track, id } = this.props;
            this.setState({ track, id });
        }
    }
    toggle() {
        console.log('.')
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    followTrack() {
        const { userId, track } = this.props;
        const info = { userId: userId, type: 'Track', mediaId: track.id }
        this.props.addFollow(info);
    }
    removeSong() {
        const payload = {playlistId: this.state.id, trackId: this.props.track.id}
        this.props.removeSong(payload);
    }
    postStation() {

        const { title, id } = this.props.track;
        console.log(this.props.track)
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Track' });
    }
    // removeMedia() {
    //     const { track, id } = this.state;
    //     const info = { func: 'Delete', mediable_id: _.get(track, 'id', 'No ID'), mediable_type: 'Track', id: id };
    //     this.props.updateStation(info);
    //     this.props.removeTrack(_.get(track, 'id', 'No ID'));

    // }
    render() {
        const { track, album, playSong } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        const imgSrc =  album ? album.photoUrl : '';
        return (
            <div>
                <div className='search-result-item'>
                    <img className='artist-tiny' src={imgSrc} alt="" />
                    <FontAwesomeIcon onClick={() => playSong(track.id)} className='play-small-pt icon' icon={["fas", "play"]} />
                    <div className='spans'>
                        <span className='search-result-title'>{track && track.title}</span>
                        <br />
                        <span className='search-result-type'>Song</span>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "heart"]} />   Add to My Music </button>
                    <button onClick={this.removeSong} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />   Remove song from playlist</button>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]} />   Start station from song</button>
                </div>
            </div>
        );
    }


};

export default PlaylistTrackItem;