import React, { Component } from 'react';
import TrackItem from './TrackItem';

class TracksDisplay extends Component {
    
    render() {
        const tracks = this.props.tracks.map((track, i) => <TrackItem 
                                        key={i} 
                                        track={track}
                                        trackArtist={this.props.artists[track.artist_id]}/>);
        return (
            <div>
                <ul>
                    {tracks}
                </ul>
            </div>
        );
    }
}

export default TracksDisplay;