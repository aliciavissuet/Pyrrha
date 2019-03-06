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
       
    }
    componentDidMount() {
        console.log('hit playlist show');
        this.props.fetchPlaylist(this.props.match.params.id);
        const { playlist, artists, tracks, albums, playlistLoading, userId } = this.props;
        this.setState({ playlist, artists, tracks, albums, playlistLoading, userId});
    }
    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {
            const { artists, tracks, albums, playlist } = this.props;
            this.setState({ artists, tracks, albums, playlist });
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    removeSong(payload){
        const newTracks = this.state.tracks;
        delete newTracks[payload.trackId];
        this.setState({ tracks: newTracks });
        this.props.removeSong(payload);
    }
    


    render() {


        const { playlist, userId, addFollow, postStation, updatePlaylist } = this.props;
        const { artists, albums, tracks } = this.state;
        

        const playlistTracks = _.values(tracks).map((track, i) => <li key={i}><PlaylistTrackItem track={track} id={_.get(playlist, 'id', 'No ID')} addFollow={addFollow} userId={userId} removeSong={this.removeSong} postStation={postStation} album={albums[_.get(track, 'albumId', 'No ID')]}/></li>)
         
        const pl = (
            <ul>
                {playlistTracks}
            </ul>
        )

        const images = _.values(tracks).map((track) => `url(${_.get(track, 'photoUrl', 'none')})`).join(',');
        const styles = {
            artistImg: {
                backgroundImage: images,
                backgroundSize: 'cover'
            }
        };
        const content = (playlist) ? pl : <Loading />
        
        return (
            <div className='playlist-show-container'>
                
                <div style={styles.artistImg} className='playlist-show-left'>
                    
                </div>
                <div className='playlist-show-right'>
                    <PlaylistHeader playlist={playlist} updatePlaylist={updatePlaylist}/>
                    <div className='search-lis'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }

};

export default PlaylistShow;