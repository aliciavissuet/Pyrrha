import {connect} from 'react-redux';
import UserStations from './UserStations';

const mapStateToProps = state => {
    const currUser = state.entities.users[state.session.currentUser];
    const currUserStations = currUser.stationIds.map((id)=> (
        state.entities.stations[id]
    ));
    return {stations: currUserStations};
};

// const mapDispatchToProps = dispatch => ({
//     createStation: () => dispatch()
// })
export default connect(mapStateToProps)(UserStations);