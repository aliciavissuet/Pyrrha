json.user do 
    json.partial! "api/users/user_only", user: @user
end
json.stations do 
    @user.stations.each do |station| 
        json.set! station.id do 
            json.partial! '/api/stations/station_only', station: station
        end
    end
end
json.tracks do 
    @user.tracks.each do |track|
        json.set! track.id do 
            json.partial! '/api/tracks/track_only', track: track 
        end
    end
end
json.albums do 
    @user.albums.each do |album|
        json.set! album.id do 
            json.partial! '/api/albums/album_only', album: album 
        end
    end
end
json.artists do 
    @user.artists.each do |artist|
        json.set! artist.id do 
            json.partial! '/api/artists/artist_only', artist: artist 
        end
    end
end
json.playlists do 
    @user.playlists.each do |playlist|
        json.set! playlist.id do 
            json.partial! 'api/playlists/playlist_only', playlist: playlist
        end
    end
end