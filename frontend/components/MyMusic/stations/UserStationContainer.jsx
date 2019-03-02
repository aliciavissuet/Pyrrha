import {connect} from 'react-redux';
import UserStations from './UserStations';
import {fetchStations} from '../../../actions/station_actions';

const mapStateToProps = state => {
    const currUser = state.entities.users[state.session.currentUser];
    
    const currUserStations = currUser.stationIds.map((id)=> (
        state.entities.stations[id]
    ));
    
    return {
        stations: currUserStations, 
        stationLoading: state.ui.stations.loading, 
        tracks: state.entities.tracks,
        
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStations: () => dispatch(fetchStations())
});

// const mapDispatchToProps = dispatch => ({
//     createStation: () => dispatch()
// })
export default connect(mapStateToProps, mapDispatchToProps)(UserStations);