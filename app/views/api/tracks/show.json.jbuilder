json.track do 
    json.partial! "api/tracks/track", track: @track
end
json.artist do 
    json.partial! "api/artists/artist", artist: @artist
end