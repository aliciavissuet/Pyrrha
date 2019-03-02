import React from 'react';
import {Link, Route} from 'react-router-dom';

import _ from 'lodash';
class UserStationItem extends React.Component {
    constructor(props)  {
        super(props);
        this.deleteStation = this.deleteStation.bind(this);
    }
    
    deleteStation (){
        const stationId = _.get(this.props.station, 'id', 'No ID Found');
        this.props.deleteStation(stationId);
    }
    render(){
        console.log(this.props);
        const {station, deleteStation} = this.props;
        
        return (
            <div className='Track-item'>
                <h1>{_.get(station, 'title', 'No Title Found')}</h1>
                <button className='delete-button' onClick={this.deleteStation}>X</button>
            </div>
        );

    }
};

export default UserStationItem;