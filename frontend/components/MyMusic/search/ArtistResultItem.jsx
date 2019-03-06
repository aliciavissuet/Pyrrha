
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class ArtistResultItem extends React.Component {
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

        const { name, id } = this.props.artist;
        const station_title = name + ' Station';

        this.props.postStation({ title: station_title, mediable_id: id, mediable_type: 'Artist' });
    }
    followTrack() {
        const { userId, artist } = this.props;
        const info = { userId: userId, type: 'Artist', mediaId: artist.id }
        this.props.addFollow(info);
    }
    render() {
        const { artist } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown': this.state.displayDropdown });
        const imgSrc = artist.photoUrl ? artist.photoUrl : '';
        return (
            <div>
                <div className='search-result-item'>
                    <div className='search-result-left'> 
                        <img className='artist-tiny' src={imgSrc} alt="" />
                        <div className='span'>
                            <span className='search-result-title'>{artist && artist.name}</span>
                            <br />
                            <span className='search-result-type'>Artist</span>
                        </div>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon icon={["fas", "headphones-alt"]} className='icon' />   Start station from artist</button>
                    <button className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "bars"]} />   Add artist to playlist</button>
                    <button onClick={this.followTrack} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "heart"]} />   Add artist to My Music</button>
                </div>
            </div>
        );
    }


};

export default ArtistResultItem;