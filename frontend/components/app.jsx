import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/frontend_route_util';
import Login from './Login/loginContainer';
import HeaderContainer from '../components/my_music/header_container';
import Signup from './Signup/Signup';
import Splash from './Splash/splash';

const App = () => (
    <div>
        <Switch>
            <AuthRoute  path="/login" component={Login} className='new-session' />
            <AuthRoute  path="/signup" component={Signup} className='new-session'/>
            <ProtectedRoute path='/my-music' component={HeaderContainer} />
            <AuthRoute path='/' component={Splash} />
        </Switch>
    </div>
);

export default App;