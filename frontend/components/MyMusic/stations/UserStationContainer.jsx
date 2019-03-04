import {connect} from 'react-redux';
import UserStations from './UserStations';
import {fetchStations, deleteStation} from '../../../actions/station_actions';
import { clearEntities } from '../../../actions/album_actions';

const mapStateToProps = state => {
    const currUser = state.entities.users[state.session.currentUser];
    
    // const currUserStations = currUser.stationIds.map((id)=> (
    //     state.entities.stations[id]
    // ));
    
    return {
        stations: state.entities.stations, 
        stationLoading: state.ui.stations.loading, 
        tracks: state.entities.tracks,
        
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStations: () => dispatch(fetchStations()),
    deleteStation: (id) => dispatch(deleteStation(id)),
    clear: () => dispatch(clearEntities())
});

// const mapDispatchToProps = dispatch => ({
//     createStation: () => dispatch()
// })
export default connect(mapStateToProps, mapDispatchToProps)(UserStations);