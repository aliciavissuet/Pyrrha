export const saveMedia = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.userId}`,
        data: {user}
    })
); 

