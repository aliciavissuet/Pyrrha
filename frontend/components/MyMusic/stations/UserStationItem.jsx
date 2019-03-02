import React from 'react';
import {Link, Route} from 'react-router-dom';

import _ from 'lodash';
class UserStationItem extends React.Component {
    constructor(props)  {
        super(props);
        
    }
    
    
    render(){
        console.log(this.props);
        const {station} = this.props;

        return (
            <div className='Track-item'>
                <h1>{_.get(station, 'title', 'No Title Found')}</h1>
                {/* <Link to={`/my-music/stations/${id}`}>View Station</Link> */}
            </div>
        );

    }
};

export default UserStationItem;