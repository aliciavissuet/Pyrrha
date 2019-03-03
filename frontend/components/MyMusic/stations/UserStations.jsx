import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import UserStationItem from './UserStationItem';
import Loading from '../../common/Loading';
class UserStations extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchStations();
    }
    
    render() {
        const stations = _.get(this, 'props.stations', {});
        const stations1 = _.values(stations);
        
        if (this.props.stationLoading) {
            return (
            <div className='Tracks-component'>
                 <Loading />
            </div>)
        } else {
            
            const stationsL = stations1.map((station, i) => {
                return (<li key={i}><Link to={`/my-music/stations/${(station ? station.id : '')}`}><UserStationItem station={station} tracks={this.props.tracks} deleteStation={this.props.deleteStation} /></Link></li>)
            });
            return (
            < div className = 'Tracks-component' >
                <ul className='track-display-container'>{stationsL}</ul>
            </div >)
        }
    

        
        // const content = (this.props.stationLoading) ? <Loading /> : stationsList
        // console.log(content)
        // return (
        //     <div className='Tracks-component'>
        //         {content}
        //         {/* <h1>hello</h1> */}
        //     </div>
        // );
    }
}

export default UserStations;