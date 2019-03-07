import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import UserStationItem from './UserStationItem';
import Loading from '../../common/Loading';
class UserStations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: this.props.stations,
            artists: this.props.artists,
            albums: this.props.albums
        };
        this.deleteStation = this.deleteStation.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchStations();
    }
    componentWillUnmount (){
        this.props.clear();
    }
    componentDidUpdate(prevProps){
        if(this.props!==prevProps) {
            this.setState({stations: this.props.stations, artists: this.props.artists, albums: this.props.albums});
        }
    }
    deleteStation(id){
        this.props.deleteStation(id);
        let newState = this.state.stations;
        delete newState[id];
        this.setState({stations: newState});
    }
    
    render() {
        const stations = _.get(this, 'state.stations', {});
        const artists = _.get(this, 'state.artists', {});
        const stations1 = _.values(stations);
        
        if (this.props.stationLoading) {
            return (
            <div className='Tracks-component'>
                 <Loading />
            </div>)
        } else {
            
            const stationsL = stations1.map((station, i) => {
                return (<li key={i}><UserStationItem station={station} playStation={this.props.playStation} albums={this.props.albums} tracks={this.props.tracks} deleteStation={this.deleteStation} artists={artists}/></li>)
            });
            return (
            < div className = 'Tracks-component' >
                <ul className='track-display-container'>{stationsL}</ul>
            </div >)
        }
    
    }
}

export default UserStations;