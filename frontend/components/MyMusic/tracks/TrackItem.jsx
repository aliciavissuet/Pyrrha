import React, { Component } from 'react';

class TrackItem extends Component {
    render() {
        const {track, artist} = this.props;
        return (
            <div className='Track-item'>
                track item here
                <span>{track.title}</span>
                <br/>
                <span>{artist.name}</span>
            </div>
        );
    }
}

export default TrackItem;