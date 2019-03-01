class Api::StationsController < ApplicationController
    def show
        @station = Station.find(params[:id])
        @tracks = (@station.tracks) ? @station.tracks  : {}
        @albums = (@station.albums) ? @station.albums  : {}
        @artists = (@station.artists) ? @station.artists  : {}
        render '/api/stations/show'
    end

    def create
        @station = Station.new(title: params[:station][:title])
        @station.user_id = current_user.id 
        debugger
        possible_stations = StationCreatedFrom
            .where(mediable_id: params[:station][:mediable_id], mediable_type: params[:station][:mediable_type])
        
        if possible_stations.length==0
            @station.save
            @station_created_from = StationCreatedFrom.new(station_created_from_params)
            @station_created_from.save 
        else
            @station = Station.find(possible_stations[0].station_id)
        end
        
        @tracks = (@station.tracks) ? @station.tracks  : {}
        @albums = (@station.albums) ? @station.albums  : {}
        @artists = (@station.artists) ? @station.artists  : {}
        render '/api/stations/created'
        
    end

    def update 
        @station = Station.find(params[:id])
        @station_created_from = StationCreatedFrom.new(station_created_from_params)
        @station_created_from.save
         @tracks = (@station.tracks) ? @station.tracks  : {}
        @albums = (@station.albums) ? @station.albums  : {}
        @artists = (@station.artists) ? @station.artists  : {}
        render '/api/stations/created'
    end

    #unfollow station
    def destroy 
    end
    # def station_params
    #     params.require(:station).permit(:title)
    # end
    private 
    def station_params 
        params.require(:station).permit(:title, :id, :mediable_id, :mediable_type)
    end
    def station_created_from_params 
        
        params.require(:station).permit(:mediable_id, :mediable_type)
    end
    
end
