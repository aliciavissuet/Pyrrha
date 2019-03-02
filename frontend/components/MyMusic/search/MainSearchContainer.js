import {connect} from 'react-redux';
import MainSearch from './MainSearch';
import { postStation } from '../../../actions/station_actions';

import _ from 'lodash';

const mapStateToProps = state => ({
    albums: Object.values(state.search.albums),
    artists: Object.values(state.search.artists),
    tracks: Object.values(state.search.tracks),
    
});

const mapDispatchToProps = state => ({
    postStation: (station) => dispatch(postStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);