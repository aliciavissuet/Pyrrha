import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
class AlbumStationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null, 
            album: null,
            displayDropdown: false
        };
        this.toggle = this.toggle.bind(this);
        this.postStation = this.postStation.bind(this);
        this.removeMedia = this.removeMedia.bind(this);
        this.followAlbum=this.followAlbum.bind(this);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { album, id} = this.props;
            this.setState({ album, id });
        }
    }
    toggle() {
        console.log('toggle');
        this.setState({ displayDropdown: !this.state.displayDropdown });
    }
    postStation() {

        const { title, id } = this.props.album;
        const station_title = title + ' Station';

        this.props.postStation({ title: station_title, mediable_id: _.get(this, 'props.album.id'), mediable_type: 'Album' });
    }
    removeMedia() {
        const { album, id } = this.state;
        const info = { func: 'Delete', mediable_id: _.get(album, 'id', 'No ID'), mediable_type: 'Album', id: id };
        this.props.updateStation(info);
        this.props.removeAlbum(_.get(album, 'id', 'No ID'));

    }
    followAlbum() {
        console.log('here')
        const { album, userId } = this.props;
        const info = { userId: userId, type: 'Album', mediaId: album.id };
        this.props.addFollow(info);
    }
    render() {
        const { album } = this.props;
        const dropdownClass = cx('hide', { 'search-result-dropdown-st': this.state.displayDropdown });
        const imgSrc = album.photoUrl ? album.photoUrl : '';
        return (
            <div>
                <div>
                    <br></br>
                </div>
                <div className='search-result-item'>
                    <img className='artist-tiny' src={imgSrc} alt="" />
                    <div className='span'>
                        <span className='search-result-title'>{album && album.title}</span>
                        <br />
                        <span className='search-result-type'>Album</span>
                    </div>
                    <div>
                        <button className='more-options' onClick={this.toggle}>...</button>

                    </div>
                </div>
                <div className={dropdownClass}>
                    <button onClick={this.postStation} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]} />   Start station from song</button>
                    <button onClick={this.removeMedia} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />   Remove song from station</button>
                    <button onClick={this.followAlbum} className='start-station'><FontAwesomeIcon className='icon' icon={["fas", "heart"]} />   Add song to My Music</button>
            </div>
           </div>
        );
    }


};

export default AlbumStationItem;