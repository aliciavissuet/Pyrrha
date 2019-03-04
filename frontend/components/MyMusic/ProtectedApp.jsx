import React, { Component } from 'react';
import HeaderContainer from './header_container';
import TrackDisplayContainer from '../MyMusic/tracks/TracksDisplayContainer';
import StationShowContainer from '../MyMusic/stations/StationShowContainer';
import PlaylistShowContainer from './Playlists/PlaylistShow/PlaylistShowContainer';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import All from './All';
import StationShow from './stations/StationShow';
import SearchNav from './search/SearchNav';
class ProtectedApp extends Component {

    render() {
        return (
            <div>
                <HeaderContainer {...this.props}/>
                <Switch>
                    <Route path='/my-music/search' component={SearchNav} />
                    {/* <Route exact path='/my-music/tracks' component={TrackDisplayContainer}/> */}
                    <Route path='/my-music/stations/:id' component={StationShowContainer} />
                    <Route path='/my-music/playlists/:id' component={PlaylistShowContainer} />
                    <Route path="/my-music" component={All}/>
                </Switch>
            </div>
        );
    }
}

export default ProtectedApp;