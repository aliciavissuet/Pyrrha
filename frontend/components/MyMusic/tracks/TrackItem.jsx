import React, { Component } from 'react';
// import trackImage from '../../../../app/assets/images/hippo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class TrackItem extends Component {
    constructor(props) {
        super(props);
        this.postStation = this.postStation.bind(this);
    }
    postStation (){
        
        const {title, id} = this.props.track;
        const station_title = title + ' Station';
        
        this.props.postStation({title: station_title, mediable_id: id, mediable_type: 'Track'});
    }
    render() {
        const {track, artist} = this.props;
        return (
            <div className='Track-item'>
                
                {track.title}
                <br/>
                {artist.name}
                <button className='add-station'><FontAwesomeIcon icon={["fas", "circle-notch"]} onClick={this.postStation}/></button>
                
            </div>
        );
    }
}

export default TrackItem;
{/* <i class="fas fa-circle-notch"></i> */}