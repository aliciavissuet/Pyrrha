export const fetchStation = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/stations/${id}`
    })
);