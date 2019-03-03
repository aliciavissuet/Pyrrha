import React, { Component } from 'react';
import _ from 'lodash';
import TrackItem from './TrackItem';
import Loading from '../../common/Loading';

class TracksDisplay extends Component {
    constructor(props){
        super(props);
        const { userId, albums, tracks, artists, ui } = this.props;
        this.state = {
            albums, artists, tracks, ui, userId
        };
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

    render(){
        const artists = _.get(this, 'state.artists', {});
        const newTracks = _.get(this, 'state.tracks', {});

        const tracks = _.values(newTracks);
        
        const tL = tracks.map((track, i) => {
            return (<li key={i}><TrackItem className='Track-item' track={track} artist={artists[track.artistId]} postStation={this.props.postStation}/></li>)});

        const trackList =  (
            <ul className='track-display-container'>
                {tL}
            </ul>
        )
        let content;
        if (!tracks || tL.length===0  || this.props.ui.albums.loading){
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