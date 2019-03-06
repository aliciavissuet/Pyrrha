json.extract! track, :id, :title, :album_id, :artist_id
json.song_url url_for(track.song) 
json.photo_url url_for(track.photo)