export const fetchRecentPlays = () => (
    
 $.ajax({
     method: 'GET',
     url: '/api/recent_plays'
 })
);

export const postRecentPlay = (recent) => (
    $.ajax({
        method: 'POST',
        url: '/api/recent_plays',
        data: {recent}
    })
);