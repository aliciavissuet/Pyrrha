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
import UserStationContainer from './stations/UserStationContainer';
import MiddleNavBar from './MiddleNavBar/MiddleNavBar';
import MySavedAlbumsContainer from './MySavedAlbums/MySavedAlbumsContainer';
import MySavedArtistsContainer from './MySavedArtists/MySavedArtistsContainer';

class All extends Component {
    render() {
        return (
            <div>
                <RecentlyPlayedContainer {...this.props}/>
                <MiddleNavBar {...this.props}/>
                <Switch>
                    <Route path="/my-music/artists" component={MySavedArtistsContainer}/>
                    <Route path="/my-music/tracks" component={TracksDisplayContainer} />
                    <Route path="/my-music/albums" component={MySavedAlbumsContainer}/>
                    <Route path='/my-music/stations' component={UserStationContainer} />
                </Switch>
            </div>
           
        );
    }
}

export default All;