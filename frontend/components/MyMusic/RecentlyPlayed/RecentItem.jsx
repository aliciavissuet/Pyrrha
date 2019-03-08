import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecentItem extends Component {
    render() {
        const { data, type } = this.props;
        const id = _.get(data, 'id', '');
        console.log(data)
        const stationCovers = [`https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover1.jpg`,
                            `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover3.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover2.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover5.png`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover6.jpeg`];
        const imgSrc = data.photoUrl ? data.photoUrl : _.sample(stationCovers);
        const styles = {

            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',


        };
        return (
            <div className='recent-item-top-level' >
                
                    <div style={styles} className='Recent-item'>
                    </div>
                    <FontAwesomeIcon onClick={() => this.props.play(id)} className='play icon' icon={["fas", "play"]} />
                    <h1>{_.get(data, 'title', '')}</h1>
                
                {/* <button className='more' onClick={this.toggle}>...</button> */}
                {/* <FontAwesomeIcon onClick={() => playTrack(id)} className='play icon' icon={["fas", "play"]} /> */}
                {/* <div className='track-item-text'> */}
                    {/* <h1>{_.get(track, 'title', 'No Title Found')}</h1> */}
                    {/* <h2>Song</h2> */}
                    {/* <h2>{_.get(artist, 'name', 'No Name Found')}</h2> */}
                {/* </div> */}
{/* 
                <ul className={squareDD}>
                    {/* faHeadphonesAlt className='icon' icon={["fal", "faHeadphonesAlt"]} */}
                    {/* <li id='dd'><button onClick={this.postStation} className='add-station'><FontAwesomeIcon icon={["fas", "headphones-alt"]} /> Start Station</button></li> */}
                    {/* <li id='dd'><button onClick={() => removeSave(track.id)} className='add-station'><FontAwesomeIcon className='icon' icon={["fas", "trash-alt"]} /> Remove Station</button></li> */}
                {/* </ul> */}
            </div>
        );
    }
}

export default RecentItem;