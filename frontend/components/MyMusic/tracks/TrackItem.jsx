import React, { Component } from 'react';
// import trackImage from '../../../../app/assets/images/hippo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import cx from 'classnames';

class TrackItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            
        };
        this.postStation = this.postStation.bind(this);
        this.toggle = this.toggle.bind(this);
        // this.hover = this.hover.bind(this);
        
    }
  
    postStation (){
        const {title, id} = this.props.track;
        const station_title = title + ' Station';
        
        this.props.postStation({title: station_title, mediable_id: id, mediable_type: 'Track'});
    }
    toggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }
    render() {
        const {track, artist, removeSave, album} = this.props;
        const squareDD = cx('hidden', {'square-dropdown': this.state.dropdown})
        const imgSrc = album ? album.photoUrl : '';
        const styles = {
        
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',

            
        };
        return (
            <div className='track-item-top-level' >
                <div style={styles} className='Track-item'>
                    <br/>
                </div>
                <button  className='more' onClick={this.toggle}>...</button>
                

               
                <div className='track-item-text'>
                    <h1>{_.get(track, 'title', 'No Title Found')}</h1>
                    <h2>Song</h2>
                    <h2>{_.get(artist, 'name', 'No Name Found')}</h2> 
                </div>
                
                <ul className={squareDD}>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    <li id='dd'><button onClick={this.postStation}className='add-station'><FontAwesomeIcon icon={["fas", "headphones-alt"]}  /> Start Station</button></li>
                    <li id='dd'><button onClick={() => removeSave(track.id)} className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]}  /> Remove Station</button></li>
                </ul>
            </div>
        );
    }
}

export default TrackItem;
{/* <i class="fas fa-circle-notch"></i> */}