
json.extract! artist, :id, :name
json.album_ids do 
    json.array! artist.albums, :id          
end