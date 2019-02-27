json.album do 
    json.extract! album, :id, :title, :year
    json.track_ids do 
        json.array! (tracks) do |track|
            track.id
        end
    end
end
json.tracks do 
    tracks.each do |track|
        json.set! track.id do
            json.partial! '/api/tracks/track', track: track 
        end 
    end
end