export const fetchArtist = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists/${id}`
    })
);

export const fetchArtists = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists`,
        data: { userId }
    })
);