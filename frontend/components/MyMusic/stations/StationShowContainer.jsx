import {connect} from 'react-redux';
import _ from 'lodash';
import StationShow from './StationShow';
import { fetchStation, updateStation, removeTrackId } from '../../../actions/station_actions';
import {clearSearch, fetchSearchResults} from '../../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
    const stationId = ownProps.match.params.id;
    const station  = state.entities.stations[stationId];
    const artists = state.entities.artists;
    const albums = state.entities.albums;
    const tracks = state.entities.tracks;
    const stationLoading = state.ui.stations.loading;
    return {station, artists, tracks, albums, stationLoading};
};

const mapDispatchToProps = dispatch => ({
    fetchStation: (id) => dispatch(fetchStation(id)),
    updateStation: (info) => dispatch(updateStation(info)),
    removeTrackId: (info) => dispatch(removeTrackId(info)),
    search: (term) => dispatch(fetchSearchResults(term)),
    clearSearch: () => dispatch(clearSearch())
});
    

export default connect(mapStateToProps, mapDispatchToProps)(StationShow);