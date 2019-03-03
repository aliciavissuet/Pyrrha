import { connect } from 'react-redux';
import { updateStation } from '../../../actions/station_actions';
import ModalContents from './ModalContents';

import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
    albums: Object.values(state.search.albums),
    artists: Object.values(state.search.artists),
    tracks: Object.values(state.search.tracks),
    id: ownProps.id

});

const mapDispatchToProps = dispatch => ({
    addToStation: (info) => dispatch(updateStation(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContents);