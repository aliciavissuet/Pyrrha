json.extract! user, :id, :username, :email
json.station_ids do 
    json.array! stations, :id
end