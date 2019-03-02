import {logout} from '../../actions/session_actions';
import {fetchSearchResults, clearSearch} from '../../actions/search_actions';
import Header from './header';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    search: (term) => dispatch(fetchSearchResults(term)),
    clearSearch: () => dispatch(clearSearch())

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

