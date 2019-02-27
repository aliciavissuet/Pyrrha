import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createUser, receiveErrors } from '../../actions/session_actions';
import SignupForm from './SignupForm';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors
});
const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user)),
    getErrors: () => dispatch(receiveErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
