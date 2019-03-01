import React, { Component } from 'react';
import UserStationItem from './UserStationItem';
class UserStations extends Component {
    
    render() {
        const stations = this.props.stations.map(station => (
            <li key={station.id}><UserStationItem station={station} /></li>
        ))
        const stationsList = <ul className='track-display-container'>{stations}</ul>
        const content = (this.props.stationLoading) ? <Loading /> : stationsList
        return (
            <div className='Tracks-component'>
                {content}
            </div>
        );
    }
}

export default UserStations;