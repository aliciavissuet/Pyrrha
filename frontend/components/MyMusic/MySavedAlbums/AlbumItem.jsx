import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
class AlbumItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { album, artist } = this.props;
        return (
            <div className='Track-item'>

                <h1>{_.get(album, 'title', 'No Title Found')}</h1>
                <br />
                <h1>{_.get(artist, 'name', 'No Name Found')}</h1>
                <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} onClick={this.postStation} /></button>

            </div>
        );
    }
}

export default AlbumItem;