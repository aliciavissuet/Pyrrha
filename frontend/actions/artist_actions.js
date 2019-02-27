import * as ArtistAPIUtil from '../utils/artist_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';
export const RECEIVE_ARTIST_ALBUMS = 'RECEIVE_ARTIST_ALBUMS';

const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

const receiveArtistAlbums = albums => ({
    type: RECEIVE_ARTIST_ALBUMS,
    albums
});

const receiveArtistErrors = (errors) => ({
    type: RECEIVE_ARTIST_ERRORS,
    errors
});

// export const fetchArtist = (id) => dispatch => (
//     ArtistAPIUtil.fetchArtist(id)
//     .then((artist => {
//         dispatch(receiveArtist(artist)));
//     },
//     ()));

export const fetchArtist = (id) => dispatch => (
    ArtistAPIUtil.fetchArtist(id).then((artist => {
        dispatch(receiveArtist(artist.artist));
        dispatch(receiveArtistAlbums(artist.albums));
    }), (errors => dispatch(receiveArtistErrors(errors))))
);