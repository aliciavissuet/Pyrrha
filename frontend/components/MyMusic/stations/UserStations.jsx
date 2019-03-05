import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import UserStationItem from './UserStationItem';
import Loading from '../../common/Loading';
class UserStations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: this.props.stations
        };
    }
    
    componentDidMount(){
        this.props.fetchStations();
    }
    componentWillUnmount (){
        this.props.clear();
    }
    componentDidUpdate(prevProps){
        if(this.props!==prevProps) {
            this.setState({stations: this.props.stations});
        }
    }
    
    render() {
        const stations = _.get(this, 'state.stations', {});
        const stations1 = _.values(stations);
        
        if (this.props.stationLoading) {
            return (
            <div className='Tracks-component'>
                 <Loading />
            </div>)
        } else {
            
            const stationsL = stations1.map((station, i) => {
                return (<li key={i}><UserStationItem station={station} tracks={this.props.tracks} deleteStation={this.props.deleteStation} /></li>)
            });
            return (
            < div className = 'Tracks-component' >
                <ul className='track-display-container'>{stationsL}</ul>
            </div >)
        }
    
    }
}

export default UserStations;