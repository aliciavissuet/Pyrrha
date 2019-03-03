export const fetchTrack = (id) => (
    $.ajax ({
        method: 'GET',
        url: `/api/tracks/${id}`
    })
);

export const fetchUserTracks = (userId) => (
    $.ajax ({
        method: 'GET',
        url: `/api/tracks`,
        data: {userId}
    })
);