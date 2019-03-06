export const fetchPlaybarSong = id => (
    $.ajax({
        method: 'GET',
        url: `/api/tracks/${id}`
    })
);

export const fetchPlaylist = id => (
    $.ajax({
        method: 'GET',
        url: `/api/playlists/${id}`
    })
);