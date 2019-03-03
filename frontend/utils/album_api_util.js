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