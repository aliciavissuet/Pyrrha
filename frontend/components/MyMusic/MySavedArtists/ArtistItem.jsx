import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
class ArtistItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { artist } = this.props;
        return (
            <div className='Track-item'>

                <h1>{_.get(artist, 'name', 'No Title Found')}</h1>
                <br />
                <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} onClick={this.postStation} /></button>

            </div>
        );
    }
}

export default ArtistItem;