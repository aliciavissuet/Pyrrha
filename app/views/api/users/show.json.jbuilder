json.user do 
    json.partial! "api/users/user_only", user: @user
end
json.stations do 
    @user.stations.each do |station| 
        json.set! station.id do 
            json.partial! '/api/stations/station_only', station: station
        end
    end
end
