json.track do
    json.partial! "api/tracks/track_only", track: @track
end
json.artist do 
    json.partial! "api/artists/artist_only", artist: @artist
end
json.album do 
    json.partial! "api/albums/album_only", album: @album 

end