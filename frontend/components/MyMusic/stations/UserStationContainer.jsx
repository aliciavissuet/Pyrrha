import {connect} from 'react-redux';
import UserStations from './UserStations';
import {fetchStations, deleteStation} from '../../../actions/station_actions';
import { clearEntities } from '../../../actions/album_actions';
import { fetchStationList } from '../../../actions/PlayBarActions';

const mapStateToProps = state => {
    const currUser = state.entities.users[state.session.currentUser];
    
    // const currUserStations = currUser.stationIds.map((id)=> (
    //     state.entities.stations[id]
    // ));
    
    return {
        stations: state.entities.stations, 
        stationLoading: state.ui.stations.loading, 
        tracks: state.entities.tracks,
        artists: state.entities.artists,
        albums: state.entities.albums,
        
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStations: () => dispatch(fetchStations()),
    deleteStation: (id) => dispatch(deleteStation(id)),
    clear: () => dispatch(clearEntities()),
    playStation: (id) => dispatch(fetchStationList(id))
});

// const mapDispatchToProps = dispatch => ({
//     createStation: () => dispatch()
// })
export default connect(mapStateToProps, mapDispatchToProps)(UserStations);