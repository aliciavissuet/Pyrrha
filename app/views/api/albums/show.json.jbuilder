json.partial! 'api/albums/album_only', album: @album
json.tracks do
    @tracks.each do |track|
        json.set! track.id do 
            json.extract! track, :id, :title, :title, :album_id, :artist_id
        end
    end
end 
