json.partial! 'api/artists/artist_only', artist: @artist
json.albums do
    @albums.each do |album|
        json.set! album.id do 
            json.extract! album, :id, :title, :year
        end
    end
end 
