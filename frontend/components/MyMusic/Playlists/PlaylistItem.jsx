import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

class PlaylistItem extends Component {
    render() {
        const {playlist} = this.props
        return (
            <div className='Track-item'>

                <h1>{_.get(playlist, 'title', 'No Title Found')}</h1>
                <br />
                
                {/* <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} onClick={this.postStation} /></button>
                <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} onClick={() => removeSave(track.id)} /></button> */}

            </div>
        );
    }
}

export default PlaylistItem;