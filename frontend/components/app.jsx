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
import Signup from './Signup/Signup';
import Splash from './Splash/splash';
import ProtectedApp from '../components/MyMusic/ProtectedApp';


const App = () => (
    <div>
        <Switch>
            <AuthRoute  path="/login" component={Login} className='new-session' />
            <AuthRoute  path="/signup" component={Signup} className='new-session'/>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/my-music' component={ProtectedApp} />
        </Switch>
        
    </div>
);

export default App;