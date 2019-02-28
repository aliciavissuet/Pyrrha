import React, { Component } from 'react';
import _ from 'lodash';
import TrackItem from './TrackItem';
import Loading from '../../common/Loading';

class TracksDisplay extends Component {
    constructor(props){
        super(props)
        // this.props.fetchAlbumTracks(1);
    }

    componentDidMount(){
        this.props.fetchAlbumTracks(1);
    }

    render(){
        const artists = _.get(this, 'props.artists.byId', {});
        const newTracks = _.get(this, 'props.tracks.byId', {});

        const tracks = _.values(newTracks);
        
        const tL = tracks.map((track, i) => {
            return (<li ><TrackItem className='Track-item' key={i} track={track} artist={artists[track.artistId]} /></li>)});

        const trackList =  (
            <ul className='track-display-container'>
                {tL}
            </ul>
        )
        let content;
        if (!tracks || tL.length===0  || this.props.albums.loading){
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