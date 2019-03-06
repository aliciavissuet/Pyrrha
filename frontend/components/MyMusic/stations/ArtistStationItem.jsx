
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class ArtistStationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
        this.followTrack = this.followTrack.bind(this);
    }
    toggle() {
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { name, id } = this.props.artist;
        const station_title = name + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Artist' });
    }
    removeMedia() {
        const { artist, id } = this.props;
        const info = { func: 'Delete', mediable_id: _.get(artist, 'id', 'No ID'), mediable_type: 'Artist', id: id };
        this.props.updateStation(info);
        this.props.removeArtist(_.get(artist, 'id', 'No ID'));

    }
    followTrack() {
        console.log('here')
        const { artist, userId } = this.props;
        const info = { userId: userId, type: 'Artist', mediaId: artist.id };
        this.props.addFollow(info);
    }
    render() {
        const { artist } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown-st': this.state.displayDropdown });
        const imgSrc = artist.photoUrl ? artist.photoUrl : '';
        return (
            <div>
                <div>
                    <br></br>
                </div>
                <div>

                <div className='search-result-item'>
                    <img className='artist-tiny' src={imgSrc} alt="" />
                    <div className='span'>
                        <span className='search-result-title'>{artist && artist.name}</span>
                        <br />
                        <span className='search-result-type'>Artist</span>
                    </div>
                   
                    <div>
                        <button className='more-options' onClick={() => this.toggle()}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon className='icon' className='icon' icon={["fas", "headphones-alt"]} />   Start station from artist</button>
                    <button onClick={this.removeMedia}className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />   Remove artist from station</button>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "heart"]} />   Add artist to My Music</button>
                </div>
                </div>
            </div>
        );
    }


};

export default ArtistStationItem;