json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.partial! 'api/tracks/track_only', track: track
            json.photo_url url_for(track.photo)
            json.created_at track.last_played
        end
        
    end
end 
json.albums do 
    @albums.each do |album|
        json.set! album.id do
            json.partial! 'api/albums/album_only', album: album
            json.photo_url url_for(album.photo)
            json.created_at album.last_played
        end
        
    end
end
json.playlists do 
    @playlists.each do |playlist|
        json.set! playlist.id do
            json.partial! 'api/playlists/playlist_only', playlist: playlist
            json.photo_url url_for(playlist.photo)
            json.created_at playlist.last_played
        end
        
    end
end
json.stations do 
    @stations.each do |station|
        json.set! station.id do
            json.partial! 'api/stations/station_only', station: station
            json.photo_url url_for(station.photo)
            json.created_at station.last_played
        end
        
    end
end