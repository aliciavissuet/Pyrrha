import React, { Component } from 'react';
import _ from 'lodash';
import TrackItem from './TrackItem';
import Loading from '../../common/Loading';

class TracksDisplay extends Component {
    constructor(props){
        super(props);
        const { userId, albums, tracks, artists, ui, user } = this.props;
        this.state = {
            albums, artists, tracks, ui, userId, user
        };
        this.removeSave = this.removeSave.bind(this);
    }

    componentDidMount(){
        console.log('track')
        this.props.fetchTracks(this.state.userId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log(this.props);
            const { userId, albums, tracks, artists, ui } = this.props;
            this.setState({ userId, albums, tracks, artists, ui });
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    removeSave(id) {
        const tf = { userId: this.state.userId, trackId: id };
        this.props.removeTrackFollow(tf);
        const newTracks = delete this.state.tracks[id];
        this.setState({ tracks: newTracks });
    }

    render(){
        const artists = _.get(this, 'state.artists', {});
        const albums = _.get(this, 'state.albums', {});
        const newTracks = _.get(this, 'state.tracks', {});
        // const userTI = _.get(this, 'state.user.trackIds', {});
        const tracks = _.values(newTracks);
        // const userTracks = tracks.filter(tr => userTI.includes(tr.id));
        const tL = tracks.map((track, i) => {
            return (<li key={i}><TrackItem className='Track-item' track={track} artist={artists[track.artistId]} album={albums[track.albumId]}removeSave={this.removeSave} postStation={this.props.postStation}/></li>)});

        const trackList =  (
            <ul className='track-display-container'>
                {tL}
            </ul>
        )
        let content;
        if (!tracks || tracks.length===0  || this.props.ui.albums.loading){
            content = <Loading /> 
        } else {
            content =  trackList
        };

        return (
            <div className='Tracks-component'>
             {content}

            </div>
        )
        
    }
}

export default TracksDisplay;