import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AlbumModalResultItem from './AlbumModalResultItem';
import TrackModalResultItem from './TrackModalResultItem';
import ArtistModalResultItem from './ArtistModalResultItem';

const ModalContents = (props) => {

    const { tracks, albums, artists, addToStation, id} = props;
    const trackResults = tracks.map((result, i) => <li key={i}><TrackModalResultItem track={result} addToStation={addToStation} id={id}/></li>)
    const albumResults = albums.map((result, i) => <li key={i}><AlbumModalResultItem album={result} addToStation={addToStation} id={id}/></li>)
    const artistResults = artists.map((result, i) => <li key={i}><ArtistModalResultItem artist={result} addToStation={addToStation} id={id}/></li>)

    return (
        <div className='search-lis-st'>
            
            {trackResults}
         
            {artistResults}
           
            {albumResults}

        </div>
    );

}


export default ModalContents;