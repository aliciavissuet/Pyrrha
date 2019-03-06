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

export const fetchAlbum = id => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${id}`
    })
);

export const fetchStation = id => (
    $.ajax({
        method: 'GET',
        url: `/api/station_playlists/${id}`
    })
);