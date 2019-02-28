import {Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';
import HeaderContainer from '../components/MyMusic/header_container';

const mapStateToProps = state => (
     { loggedIn: Boolean(state.session.currentUser) }
);
const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} render={(props) => (
        loggedIn ? (<Component {...props} />) :
            (<Redirect to="/login" />))} />
);

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    
    return (<Route path={path} render={(props) => (
        !loggedIn ? (<Component {...props} />) :
            (<Redirect to="/my-music" />))} />
    )};


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
