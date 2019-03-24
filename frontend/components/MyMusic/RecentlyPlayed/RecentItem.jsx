import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecentItem extends Component {
    
    render() {
        const { data, type } = this.props;
        const id = _.get(data, 'id', '');
        // console.log(data);
        const stationCovers = [`https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover1.jpg`,
                            `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover3.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover2.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover5.png`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover6.jpeg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/cover_10.jpeg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/cover_9.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/cover_8.jpg`,
                        `https://s3-us-west-1.amazonaws.com/pyrrha-dev/cover_7.jpg`];
        const imgSrc = data.photoUrl ? data.photoUrl : _.sample(stationCovers);
        const styles = {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
        };
        const pos = {position: 'absolute', left: `${Math.floor(this.props.index/this.props.left*100)}%`};
        // console.log(pos);
        return (
            <div className={`recent-item-top-level ${this.props.cn}`} onMouseOver={()=>this.props.selectRecent(this.props.index)}>
                
                    <div style={styles} className='Recent-item' >
                    </div>
                    <FontAwesomeIcon onClick={() => this.props.play(id)} className='play icon' icon={["fas", "play"]} />
                    <h1>{_.get(data, 'title', '')}</h1>
                
            </div>
        );
    }
}

export default RecentItem;