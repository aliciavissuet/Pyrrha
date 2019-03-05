
json.extract! artist, :id, :name, :album_ids 
json.photo_url url_for(artist.photo) 
