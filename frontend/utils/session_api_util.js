export const postUser = (user) => (
    $.ajax ({
        method: 'POST',
        url: 'api/users',
        dataType: 'json',
        data: {user}
    })
);

export const postSession = (user) => (
    $.ajax ({
        method: 'POST',
        url: 'api/session',
        dataType: 'json',
        data: {user}
    })
);

export const deleteSession = () => (
    $.ajax ({
        method: 'DELETE',
        url: 'api/session'
    })
);

export const demoLogin = () => (
    $.ajax ({
        method: 'POST',
        url: 'api/session',
        data: {user: {email: 'guest@email.com', password: 'password'}}
    })
);