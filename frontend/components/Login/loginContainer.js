import { connect } from 'react-redux';
import { login, receiveErrors, demoLogin, clearSessionErrors } from '../../actions/session_actions';
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);