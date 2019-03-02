export const search = (searchTerm) => (
    $.ajax({
        method: 'GET',
        url: `/api/searches`,
        data: {searchTerm}
    })
);