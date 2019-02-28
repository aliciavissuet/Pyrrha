import React, { Component } from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import TracksDisplayContainer from './tracks/TracksDisplayContainer';
// import RecentlyPlayed from './RecentlyPlayed/RecentlyPlayed';
import RecentlyPlayedContainer from './RecentlyPlayed/RecentlyPlayedContainer';
import MiddleNavBar from './MiddleNavBar/MiddleNavBar';

class All extends Component {
    render() {
        return (
            <div>
                <RecentlyPlayedContainer {...this.props}/>
                <MiddleNavBar {...this.props}/>
                <Switch>
                    <Route path="/my-music/tracks" component={TracksDisplayContainer} />
                </Switch>
            </div>
           
        );
    }
}

export default All;