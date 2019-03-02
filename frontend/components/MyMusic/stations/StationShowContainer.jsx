import {connect} from 'react-redux';
import StationShow from './StationShow';

const mapStateToProps = state => {
    const stationId = this.props.match.params.id;
    const station = this.state.entities.stations[stationId];

    return {station};
};

// const dispatchToProps = dispatch => {
//     return {updateStation: () => }
// }
export default connect(mapStateToProps)(StationShow);