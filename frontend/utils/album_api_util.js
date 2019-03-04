export const fetchAlbum = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${id}`
    })
);

export const fetchAlbums = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/albums`,
        data: {userId}
    })
);

export const removeAlbumFollow = (af) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/album_follows/${af.userId}`,
        data: {af}
    })
);