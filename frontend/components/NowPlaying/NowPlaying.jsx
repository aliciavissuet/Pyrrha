import React, { Component, useState } from 'react';
import _ from 'lodash';

const NowPlaying = (props) => {


    const bg = _.get(props, 'currentSong.color') || '#5d85c6';


    const imgSrc = props.currentSong ? _.get(props, 'currentSong.track.photoUrl', '') : '';

    return (
        <div className='now-playing-container' style={{ background:bg }}>
            <h1>{_.get(props, 'list.title', '')}</h1>
            <img src={imgSrc} style={{height:'350px', width:'350px', margin:'center'}} alt=""/>
            <h2>{_.get(props, 'currentSong.track.title', '')}</h2>
            <h3>{_.get(props, 'currentSong.artist.name', '')}</h3>
        </div>
    );

}

export default NowPlaying;