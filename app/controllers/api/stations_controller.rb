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
        mediable_id = params[:station][:mediable_id].to_i
        possible_station = StationCreatedFrom
            .where(mediable_id: params[:station][:mediable_id], mediable_type: params[:station][:mediable_type])
            .select {|scf| scf.station.first_media == mediable_id && scf.station.user_id == current_user.id}
        
        if possible_station.length==0
            @station.tracks.push(Track.find(mediable_id))
            @station.save
            # @station_created_from = StationCreatedFrom.new(station_created_from_params)
            # @station_created_from.save 
        else
            @station = possible_station[0].station
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
    
    def index 
        @stations = Station.includes(:tracks, :albums, :artists).where(stations: {user_id: current_user.id})
        
        @tracks = []
        @albums = []
        @artists = []
        @stations.each do |station|
            @tracks.concat(station.tracks)
            @albums.concat(station.albums)
            @artists.concat(station.artists)
        end
        @user = current_user
        render '/api/stations/index'
    end
    private 
    def station_params 
        params.require(:station).permit(:title, :id, :mediable_id, :mediable_type)
    end
    def station_created_from_params 
        
        params.require(:station).permit(:mediable_id, :mediable_type)
    end
    
end
