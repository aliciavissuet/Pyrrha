import React, { Component } from 'react';
import HeaderContainer from './header_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import All from './All';
class ProtectedApp extends Component {

    render() {
        return (
            <div>
                <HeaderContainer {...this.props}/>
                <Switch>
                    <Route path="/my-music" component={All}/>
                </Switch>
            </div>
        );
    }
}

export default ProtectedApp;