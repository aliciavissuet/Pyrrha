import React, { Component } from 'react';
import _ from 'lodash';
import PlaylistItem from './PlaylistItem';
import Loading from '../../common/Loading';
import {Link} from 'react-router-dom';

class PlaylistDisplay extends Component {
    constructor(props) {
        super(props);
        const {artists, tracks, playlists, user, ui} = this.props;
        this.state = {
            artists, tracks, playlists, user, ui
        };
        this.removePlaylist= this.removePlaylist.bind(this);

    }
    removePlaylist(id){
        let newState = this.state.playlists;
        delete newState[id];
        this.props.removePlaylist(id);
        this.setState({playlists: newState});
    }
    componentDidMount(){
        
        this.props.fetchPlaylists();
        
    }
    componentDidUpdate(prevProps){
        console.log(this.state)
        if (prevProps !== this.props) {
            const { artists, tracks, playlists, user, ui } = this.props;
            this.setState({ artists, tracks, playlists, user, ui});
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    render() {
        const { fetchPlaybarPlaylist} = this.props;
        const artists = _.get(this, 'state.artists', {});
        const tracks1 = _.get(this, 'state.tracks', {});
        const albums = _.get(this, 'state.albums', {});
        const playlists1 = _.get(this, 'state.playlists', {});
        
        const playlistVals = _.values(playlists1);
        const pL = playlistVals.map((playlist, i) => {
            return (<li key={i}><PlaylistItem className='Track-item' deletePlaylist={this.removePlaylist} playlist={playlist} artist={artists[playlist.artistIds[0]]} play={fetchPlaybarPlaylist}/></li>)
        });
        const playList = (
            <ul className='track-display-container'>
                {pL}
            </ul>
        )
        let content;
        if (!this.state.playlists || playlistVals.length === 0 || this.state.ui.loading) {
            content = <Loading />
        } else {
            content = playList
        };

        return (
            <div className='Tracks-component'>
                {content}
            </div>
        );
    }
}

export default PlaylistDisplay;