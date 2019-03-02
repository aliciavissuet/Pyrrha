import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import SearchNav from './SearchNav';
import TrackResultItem from './TrackResultItem';
import ArtistResultItem from './ArtistResultItem';
import AlbumResultItem from './AlbumResultItem';

const MainSearch = (props) => {
    
        const {tracks, albums, artists, searchResultType} = props;
        const trackResults = tracks.map((result, i) => <li key={i}><TrackResultItem track={result} /></li>)
        const albumResults = albums.map((result, i) => <li key={i}><AlbumResultItem album={result}/></li>)
        const artistResults = artists.map((result, i) => <li key={i}><ArtistResultItem artist={result}/></li>)
        return (
            <div className='search-lis'>
                {( searchResultType === 'tracks' || searchResultType === 'all' ) && trackResults }
                {(searchResultType === 'artists' || searchResultType === 'all') && artistResults }
                {(searchResultType === 'albums' || searchResultType === 'all' ) && albumResults }
                
            </div>
        );
    
}

export default MainSearch;