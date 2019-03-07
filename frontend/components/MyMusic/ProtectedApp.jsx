import React, { Component } from 'react';
import HeaderContainer from './header_container';
import TrackDisplayContainer from '../MyMusic/tracks/TracksDisplayContainer';
import StationShowContainer from '../MyMusic/stations/StationShowContainer';
import PlaylistShowContainer from './Playlists/PlaylistShow/PlaylistShowContainer';
import AlbumShowContainer from './MySavedAlbums/AlbumShow/AlbumShowContainer';
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
import PlayBarContainer from '../PlayBar/PlayBarContainer';
import NowPlayingContainer from '../NowPlaying/NowPlayingContainer';
class ProtectedApp extends Component {

    render() {
        return (
            <div>
                <HeaderContainer {...this.props}/>
                <Switch>
                    <Route path='/my-music/now-playing' component={NowPlayingContainer}/>
                    <Route path='/my-music/search' component={SearchNav} />
                    <Route path='/my-music/stations/:id' component={StationShowContainer} />
                    <Route path='/my-music/playlists/:id' component={PlaylistShowContainer} />
                    <Route path='/my-music/albums/:id' component={AlbumShowContainer}/>
                    <Route path="/my-music" component={All}/>
                </Switch>
                <div className='clear-fix'><p>hey there</p></div>
                <PlayBarContainer {...this.props}/>
            </div>
        );
    }
}

export default ProtectedApp;