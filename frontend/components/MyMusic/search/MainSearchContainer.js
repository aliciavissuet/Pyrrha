import {connect} from 'react-redux';
import MainSearch from './MainSearch';
import _ from 'lodash';

const mapStateToProps = state => ({
    albums: Object.values(state.search.albums),
    artists: Object.values(state.search.artists),
    tracks: Object.values(state.search.tracks),
    
});

export default connect(mapStateToProps)(MainSearch);