import React from 'react';
import _ from 'lodash';
import ArtistItem from './ArtistItem';
import Loading from '../../common/Loading';

class MySavedArtists extends React.Component {
    constructor(props) {
        super(props);
        const { userId, albums, tracks, artists, ui, user } = this.props;
        this.state = {
            albums, artists, tracks, ui, userId, user
        };
        this.removeSave = this.removeSave.bind(this);
    }
    componentDidMount() {
        console.log(this.state.userId);
        this.props.fetchUserArtists(this.state.userId);

    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            console.log(this.props);
            const { userId, albums, tracks, artists, ui } = this.props;
            this.setState({ userId, albums, tracks, artists, ui });
        }
    }
    removeSave(id) {
        const af = { userId: this.state.userId, artistId: id };
        this.props.removeArtistFollow(af);
        const newArtists = delete this.state.artists[id];
        this.setState({ artists: newArtists });
    }
    render() {


        const { userId, albums, tracks, artists, ui, user } = this.state;
        const ars = _.values(artists);
        const userAr = _.get(this, 'state.user.artistIds', {});
        const userArtists = ars.filter(ar => userAr.includes(ar.id));

        const artList = userArtists.map((artist, i) => {
            return (<li key={i}><ArtistItem className='Track-item' userId={userId} artist={artist} removeSave={this.removeSave}  /></li>)
        });

        const artistList = (
            <ul className='track-display-container'>
                {artList}
            </ul>
        )
        let content;
        if (!artists || artList.length === 0 || ui.artists.loading) {
            content = <Loading />
        } else {
            content = artistList
        };

        return (
            <div className='Tracks-component'>
                {content}
            </div>
        )
    }
};

export default MySavedArtists;