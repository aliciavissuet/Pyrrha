import { connect } from 'react-redux';
import { login, receiveErrors, demoLogin, clearSessionErrors } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';
import Login from './login';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors
});
const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
    getErrors: () => dispatch(receiveErrors()),
    clearErrors: ()=> dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));