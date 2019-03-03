import React from 'react';
import _ from 'lodash';
import ArtistItem from './ArtistItem';
import Loading from '../../common/Loading';

class MySavedArtists extends React.Component {
    constructor(props) {
        super(props);
        const { userId, albums, tracks, artists, ui } = this.props;
        this.state = {
            albums, artists, tracks, ui, userId
        };
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
    render() {


        const { userId, albums, tracks, artists, ui } = this.state;
        const ars = _.values(artists);

        const artList = ars.map((artist, i) => {
            return (<li key={i}><ArtistItem className='Track-item' artist={artist}  /></li>)
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