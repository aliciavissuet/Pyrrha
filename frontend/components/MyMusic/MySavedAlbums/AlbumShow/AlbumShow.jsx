import React, { Component } from 'react';
import _ from 'lodash';
import Loading from '../../../common/Loading';
// import PlaylistHeader from './PlaylistHeader';
import cx from 'classnames';
import AlbumItemContainer from './AlbumItemContainer';


class PlaylistShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: null,
            artists: null,
            tracks: null,
            album: null,
            show: false,
        };
        // this.removeSong = this.removeSong.bind(this);

    }
    componentDidMount() {
        console.log('hit playlist show');
        this.props.fetchAlbum(this.props.match.params.id);
        const { playlist, artists, tracks, album, playlistLoading, userId } = this.props;
        this.setState({ playlist, artists, tracks, album, playlistLoading, userId });
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            console.log(this.props);
            const { artists, tracks, album } = this.props;
            this.setState({ artists, tracks, album });
        }
    }
    componentWillUnmount() {
        this.props.clear();
    }
    removeSong(payload) {
        const newTracks = this.state.tracks;
        delete newTracks[payload.trackId];
        this.setState({ tracks: newTracks });
        this.props.removeSong(payload);
    }



    render() {


        const { playlist, userId, addFollow, postStation, updatePlaylist } = this.props;
        const { artists, album, tracks } = this.state;
        const albumTitle = _.get(this, 'state.album.title', '');
        const albumTracks = _.values(tracks).map((track, i) => <li key={i}><AlbumItemContainer track={track} /></li>)

        const at = (
            <ul>
                {albumTracks}
            </ul>
        )
        const content = (album) ? at : <Loading />

        return (
            <div className='playlist-show-container'>

                <div className='playlist-show-left'>
                    <p>Picture goes here</p>
                </div>
                <div className='playlist-show-right'>
                    <h1 className='album-show-header'>
                        {albumTitle}
                    </h1>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }

};

export default PlaylistShow;