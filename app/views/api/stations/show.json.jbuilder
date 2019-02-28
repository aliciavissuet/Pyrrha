json.station do 
    json.partial! '/api/stations/station_only', station: @station
end
json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.partial! 'api/tracks/track_only', track: track
        end
    end
end 
json.artists do 
    @artists.each do |artist|
        json.set! artist.id do
            json.partial! 'api/artists/artist_only', artist: artist
        end
    end
end
json.albums do 
    @albums.each do |album|
        json.set! album.id do
            json.partial! 'api/albums/album_only', album: album
        end
    end
end