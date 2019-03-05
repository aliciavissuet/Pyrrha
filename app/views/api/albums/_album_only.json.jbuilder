json.extract! album, :id, :title, :year, :track_ids, :artist_ids
json.photo_url url_for(album.photo) 