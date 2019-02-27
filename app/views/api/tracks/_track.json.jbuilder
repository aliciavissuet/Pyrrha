json.track do 
    json.extract! track, :id, :title, :title, :album_id, :artist_id
end
json.artist do
    json.partial! '/api/artists/artist', artist: @artist, albums: @albums
end