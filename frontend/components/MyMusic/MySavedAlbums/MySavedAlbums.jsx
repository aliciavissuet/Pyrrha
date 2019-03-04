import React from 'react';
import _ from 'lodash';
import AlbumItem from './AlbumItem';
import Loading from '../../common/Loading';

class MySavedAlbums extends React.Component {
    constructor(props) {
        super(props);
        const { userId, albums, tracks, artists, ui, user } = this.props; 
        this.state = {
            albums, artists, tracks, ui, userId, user
        };
        this.removeSave = this.removeSave.bind(this);
    }
    componentDidMount(){
        console.log(this.state.userId);
        this.props.fetchUserAlbums(this.state.userId);

    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log(this.props);
            const { userId, albums, tracks, artists, ui, user } = this.props; 
            this.setState({ userId, albums, tracks, artists, ui, user } );
        }
    }
    componentWillUnmount(){
        this.props.clear();
    }
    removeSave(id) {
        const af = {userId: this.state.userId, albumId: id};
        this.props.removeAlbumFollow(af);
        const newAlbums = delete this.state.albums[id];
        this.setState({albums: newAlbums});
    }
    render(){

    
        const {userId, albums, tracks, artists, ui, user} = this.state;
        const als = _.values(albums);
        // const userAl = _.get(this, 'state.user.albumIds', {});
        // const userAlbums = als.filter(al => userAl.includes(al.id));
        const alList = als.map((album, i) => {
            return (<li key={i}><AlbumItem className='Track-item' userId={userId} album={album} artist={artists[album.artistIds[0]]} removeSave={this.removeSave}/></li>)
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