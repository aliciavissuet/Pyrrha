import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, PrivateRoute } from '../utils/frontend_route_util';
import Login from './Login/loginContainer';
import Signup from './Signup/Signup';
import Splash from './Splash/splash';
import ProtectedApp from '../components/MyMusic/ProtectedApp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const App = () => (
    <div>
        <Switch>
            <AuthRoute  path="/login" component={Login} className='new-session' />
            <AuthRoute  path="/signup" component={Signup} className='new-session'/>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/my-music' component={ProtectedApp} />
            <Redirect to='/my-music'/>
        </Switch>
        
    </div>
);

export default App;