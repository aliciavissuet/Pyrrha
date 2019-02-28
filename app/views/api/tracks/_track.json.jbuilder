
json.partial! '/api/tracks/track', track: track

json.artist do
    json.partial! '/api/artists/artist', artist: track.artist, albums: []
end