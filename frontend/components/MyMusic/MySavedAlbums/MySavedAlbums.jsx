import React from 'react';
import _ from 'lodash';
import AlbumItem from './AlbumItem';
import Loading from '../../common/Loading';

class MySavedAlbums extends React.Component {
    constructor(props) {
        super(props);
        const { userId, albums, tracks, artists, ui } = this.props; 
        this.state = {
            albums, artists, tracks, ui, userId
        };
    }
    componentDidMount(){
        console.log(this.state.userId);
        this.props.fetchUserAlbums(this.state.userId);

    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log(this.props);
            const { userId, albums, tracks, artists, ui } = this.props; 
            this.setState({ userId, albums, tracks, artists, ui } );
        }
    }
    render(){

    
        const {userId, albums, tracks, artists, ui} = this.state;
        const als = _.values(albums);

        const alList = als.map((album, i) => {
            return (<li key={i}><AlbumItem className='Track-item' album={album} artist={artists[album.artistIds[0]]}/></li>)
        });

        const albumList = (
            <ul className='track-display-container'>
                {alList}
            </ul>
        )
        let content;
        if (!albums || alList.length === 0 || ui.albums.loading) {
            content = <Loading />
        } else {
            content = albumList
        };

        return (
            <div className='Tracks-component'>
                {content}
            </div>
        )
    }
};

export default MySavedAlbums;