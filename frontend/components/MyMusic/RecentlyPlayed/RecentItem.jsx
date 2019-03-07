import React, { Component } from 'react';

class RecentItem extends Component {
    render() {
        const { data, type } = this.props;
        const id = _.get(data, 'id', '');
        console.log(data)
        const imgSrc = data.photoUrl ? data.photoUrl : 'https://s3-us-west-1.amazonaws.com/pyrrha-dev/station.jpg';
        const styles = {

            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',


        };
        return (
            <div className='recent-item-top-level' >
                
                    <div style={styles} className='Recent-item'>
                    </div>

                
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