import React, { Component } from 'react';
// import trackImage from '../../../../app/assets/images/hippo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class TrackItem extends Component {
    render() {
        const {track, artist} = this.props;
        return (
            <div className='Track-item'>
                
                {track.title}
                <br/>
                {artist.name}
                <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} /></button>
                
            </div>
        );
    }
}

export default TrackItem;
{/* <i class="fas fa-circle-notch"></i> */}