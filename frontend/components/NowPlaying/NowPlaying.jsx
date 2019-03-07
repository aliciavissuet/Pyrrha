import React, { Component, useState } from 'react';
import _ from 'lodash';

const NowPlaying = (props) => {


    const bg = _.get(props, 'currentSong.color') || '#5d85c6';


    const imgSrc = props.currentSong ? _.get(props, 'currentSong.track.photoUrl', '') : '';

    return (
        <div className='now-playing-container' style={{ background:bg }}>
            <h1>{_.get(props, 'currentSong.track.title', '')}</h1>
            <img src={imgSrc} style={{height:'200px', width:'200px', margin:'center'}} alt=""/>
        </div>
    );

}

export default NowPlaying;