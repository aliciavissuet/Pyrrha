import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecentItem extends Component {
    
    render() {
        const { data, type } = this.props;
        const id = _.get(data, 'id', '');
        const stationCovers = [`https://s3-us-west-1.amazonaws.com/pyrrha-dev/station_cover1.jpg`];
        const imgSrc = data.photoUrl ? data.photoUrl : _.sample(stationCovers);
        const styles = {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
        };
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