export const postPlaylist = (playlist) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: {playlist}
    })
);

export const fetchPlaylists = () => (
    $.ajax({
        method: 'GET',
        url: '/api/playlists',
        
    })
);

export const removePlaylist = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${id}`
    })
);
export const fetchPlaylist = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/playlists/${id}`
    })
)

export const addSongToPlaylist = (pt) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlist_tracks',
        data: {pt}
    })
);

export const removeSongFromPlaylist = (pt) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlist_tracks/${pt.playlistId}`,
        data: {pt}
    })
);