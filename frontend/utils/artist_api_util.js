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
export const removeArtistFollow = (af) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/artist_follows/${af.userId}`,
        data: { af }
    })
);