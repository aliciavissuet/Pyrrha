import React from 'react';
import {Link, Route} from 'react-router-dom';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import _ from 'lodash';
class UserStationItem extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            dropdown: false
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
        console.log(this.props);
        const {station, deleteStation} = this.props;
        const squareDD = cx('hidden', { 'square-dropdown': this.state.dropdown })

        return (
            // <div className='Track-item'>
            //     <h1>{_.get(station, 'title', 'No Title Found')}</h1>
            //     <button className='delete-button' onClick={this.deleteStation}>X</button>
            // </div>

            <div className='track-item-top-level'>
                <div className='Track-item'>
                    <button className='more' onClick={this.toggle}>...</button>
                </div>
                <div className='track-item-text'>
                    <h1>{_.get(station, 'title', 'No Title Found')}</h1>
                    <h2>Station</h2>
                </div>

                <ul className={squareDD}>
                    <button className='delete-button' onClick={this.deleteStation}><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} />Remove Station</button>

                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    <li id='dd'><button className='add-station'><FontAwesomeIcon icon={["fas", "headphones-alt"]} onClick={this.postStation} /> Start Station</button></li>
                    {/* <li id='dd'><button className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} onClick={() => removeSave(track.id)} />Remove Station</button></li> */}
                </ul>
            </div>
        );

    }
};

export default UserStationItem;