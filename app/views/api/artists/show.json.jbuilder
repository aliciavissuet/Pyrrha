json.artist do
    json.partial! 'api/artists/artist_only', artist: @artist
end
json.albums do
    @albums.each do |album|
        json.set! album.id do 
            json.partial! '/api/albums/album_only', album: album
        end
    end
end 
 