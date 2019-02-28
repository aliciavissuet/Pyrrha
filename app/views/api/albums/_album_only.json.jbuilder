json.extract! album, :id, :title, :year
json.track_ids do 
    json.array! album.tracks, :id          
end