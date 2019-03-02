export const fetchStation = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/stations/${id}`
    })
);

export const postStation = (station) => (
    $.ajax({
        method: 'POST',
        url: `/api/stations`,
        dataType: 'json',
        data: {station}
    })
);

export const fetchUserStations = () => (
    $.ajax({
        method: 'GET',
        url: '/api/stations'

    })
);

export const deleteStation = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/stations/${id}`,
    })
);