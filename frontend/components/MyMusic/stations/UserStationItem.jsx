import React from 'react';
import {Link, Route} from 'react-router-dom';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import _ from 'lodash';
class UserStationItem extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            dropdown: false,
           
        }
        this.deleteStation = this.deleteStation.bind(this);
        this.toggle = this.toggle.bind(this);

    }
    
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    deleteStation (){
        const stationId = _.get(this.props.station, 'id', 'No ID Found');
        this.props.deleteStation(stationId);
    }
    

    render(){
        const {station, deleteStation, artists, tracks, albums} = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown });
        const trs = _.get(station, 'trackIds', []).map(tr => _.get(tracks, `${[tr]}.photoUrl`, ''));
        const als = _.get(station, 'albumIds', []).map(al => _.get(albums, `${[al]}.photoUrl`, ''));
        const ars = _.get(station, 'artistIds', []).map(ar => _.get(artists, `${[ar]}.photoUrl`, ''));
        const id = _.get(station, 'id', '');
        const imgSrc = trs.concat(als, ars)[0] ? trs.concat(als, ars)[0] : '';
        const styles = {
            artistImg: {
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',

            }
        };
        // console.log(trs, als, ars)
        return (
            // <div className='Track-item'>
            //     <h1>{_.get(station, 'title', 'No Title Found')}</h1>
            //     <button className='delete-button' onClick={this.deleteStation}>X</button>
            // </div>

            <div className='track-item-top-level'>
                <div style={styles.artistImg} className='Track-item'>
                </div>
                <button className='more' onClick={this.toggle}>...</button>
                <FontAwesomeIcon onClick={() => this.props.playStation(id)} className='play icon' icon={["fas", "play"]} />
                <Link to={`/my-music/stations/${(this.props.station.id)}`}>
                    <div className='track-item-text'>
                    <h1>{this.props.station.title}</h1>
                    <h2>Station</h2>
                    </div>
                </Link>

                <ul className={squareDD}>
                    {/* <li id='dd'><button className='add-station' onClick={this.postStation}><FontAwesomeIcon className='icon' icon={["fas", "headphones-alt"]}  /> Start Station</button></li> */}
                    <li id='dd'><button className='add-station' onClick={this.deleteStation}><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />Remove Station</button></li>

                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    {/* <li id='dd'><button className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} onClick={() => removeSave(track.id)} />Remove Station</button></li> */}
                </ul>
                
            </div>
        );

    }
};

export default UserStationItem;