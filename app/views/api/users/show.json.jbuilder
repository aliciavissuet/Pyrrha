json.user do 
    json.partial! "api/users/user_only", user: @user, stations: @stations
end
json.stations do 
    @stations.each do |station| 
        json.set! station.id do 
            json.partial! '/api/stations/station_only', station: station
        end
    end
end
