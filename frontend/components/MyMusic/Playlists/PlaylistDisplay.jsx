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
    render() {
        const artists = _.get(this, 'state.artists', {});
        const tracks1 = _.get(this, 'state.tracks', {});
        const albums = _.get(this, 'state.albums', {});
        const playlists1 = _.get(this, 'state.playlists', {});
        const userPL = _.get(this, 'state.user.playlistIds', {});

        const playlistVals = _.values(playlists1);
        const userPlaylists = playlistVals.filter(pl => userPL.includes(pl.id));
        const pL = userPlaylists.map((playlist, i) => {
            return (<li key={i}><Link to={`/my-music/playlists/${playlist.id}`}><PlaylistItem className='Track-item' playlist={playlist} /></Link></li>)
        });
        const playList = (
            <ul className='track-display-container'>
                {pL}
            </ul>
        )
        let content;
        if (!this.state.playlists || userPlaylists.length === 0 || this.state.ui.loading) {
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