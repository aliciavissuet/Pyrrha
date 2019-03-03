import {connect} from 'react-redux';
import _ from 'lodash';
import MainSearch from './MainSearch';

const mapStateToProps = state => ({
    albums: Object.values(state.search.albums),
    artists: Object.values(state.search.artists),
    tracks: Object.values(state.search.tracks),
    
});

const mapDispatchToProps = state => ({
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);