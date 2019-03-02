json.album do 
    json.partial! 'api/albums/album_only', album: @album
end
json.tracks do
    @album.tracks.each do |track|
        json.set! track.id do
            json.partial! 'api/tracks/track_only', track: track
        end
    end
end 
json.artists do 
    @album.artists.each do |artist|
        json.set! artist.id do
            json.partial! 'api/artists/artist_only', artist: artist
        end
    end
end