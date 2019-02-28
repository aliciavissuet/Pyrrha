json.album do 
    json.extract! album, :id, :title, :year
    json.track_ids do 
        json.array! tracks, :id          
    end
end