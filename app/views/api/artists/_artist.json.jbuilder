json.artist do 
    json.extract! artist, :id, :name
    json.album_ids do 
        json.array! artist.albums, :id          
    end
end
json.albums do 
  @albums.each do |album|
        json.set! album.id do
            json.partial! '/api/albums/album', album: album, tracks: album.tracks 
        end 
    end  
end
