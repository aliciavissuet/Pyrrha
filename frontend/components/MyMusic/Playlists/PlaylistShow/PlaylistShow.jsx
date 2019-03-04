import React, { Component } from 'react';
import _ from 'lodash';
import PlaylistTrackItem from './PlaylistTrackItem';
import Loading from '../../../common/Loading';
import PlaylistHeader from './PlaylistHeader';
import cx from 'classnames';


class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: null,
            artists: null,
            tracks: null,
            albums: null,
            show: false,
        };
        this.removeSong = this.removeSong.bind(this);
        // this.removeTrack = this.removeTrack.bind(this);
        // this.removeAlbum = this.removeAlbum.bind(this);
        // this.removeArtist = this.removeArtist.bind(this);
        // this.showModal = this.showModal.bind(this);
        // this.hideModal = this.hideModal.bind(this);
        // this.search = this.search.bind(this);
    }
    componentDidMount() {
        console.log('hit playlist show');
        this.props.fetchPlaylist(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { artists, tracks, albums, playlist } = this.props;
            this.setState({ artists, tracks, albums, playlist });
        }
    }

    removeSong(payload){
        const newTracks = this.state.tracks;
        delete newTracks[payload.trackId];
        this.setState({ tracks: newTracks });
        this.props.removeSong(payload);
    }
    // removeTrack(id) {
    //     newTracks = delete this.state.tracks[id];
    //     this.setState({ tracks: newTracks });
    // }
    // removeAlbum(id) {
    //     newAlbums = delete this.state.albums[id];
    //     this.setState({ albums: newAlbums });
    // }
    // removeArtist(id) {
    //     newArtists = delete this.state.artists[id];
    //     this.setState({ artists: newArtists });
    // }
    // showModal() {
    //     this.setState({ show: true });

    // };

    // hideModal() {
    //     this.setState({ show: false });
    // };
    // search(e) {
    //     if (e.target.value.length === 0) {
    //         this.props.clearSearch();
    //     } else {
    //         this.props.search(e.target.value);

    //     }
    // }



    render() {


        const { playlist, userId, addFollow, postStation } = this.props;
        const { artists, albums, tracks } = this.state;
        const trIds = _.get(playlist, 'trackIds', []);

        const playlistTracks = _.values(tracks).filter(tr => trIds.includes(tr.id)).map((track, i) => <li key={i}><PlaylistTrackItem track={track} id={_.get(playlist, 'id', 'No ID')} addFollow={addFollow} userId={userId} removeSong={this.removeSong} postStation={postStation}/></li>)
         
        const pl = (
            <ul>
                {playlistTracks}
            </ul>
        )
        const content = (playlist) ? pl : <Loading />
        
        return (
            <div className='playlist-show-container'>
                
                <div className='playlist-show-left'>
                    <p>Picture goes here</p>
                </div>
                <div className='playlist-show-right'>
                    <PlaylistHeader playlist={playlist}/>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }

};

export default PlaylistShow;