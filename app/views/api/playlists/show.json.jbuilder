json.playlist do
    json.partial! 'api/playlists/playlist_only', playlist: @playlist
end
json.albums do
    @playlist.albums.each do |album|
        json.set! album.id do 
            json.partial! '/api/albums/album_only', album: album
        end
    end
end 
json.tracks do
    @playlist.tracks.each do |track|
        json.set! track.id do 
            json.partial! '/api/tracks/track_only', track: track
        end
    end
end 
json.artists do
    @playlist.artists.each do |artist|
        json.set! artist.id do 
            json.partial! '/api/artists/artist_only', artist: artist
        end
    end
end 