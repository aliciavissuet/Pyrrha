import React, { Component } from 'react';

class TrackItem extends Component {
    render() {
        const {title, artistName} = this.props;
        return (
            <div className='Track-item'>
                <span>{title}</span>
                <span>{artistName}</span>
            </div>
        );
    }
}

export default TrackItem;