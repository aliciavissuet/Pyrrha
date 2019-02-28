class Api::StationsController < ApplicationController
    def show
        @station = Station.find(params[:id])
        @tracks = (@station.tracks) ? @station.tracks  : {}
        @albums = (@station.albums) ? @station.albums  : {}
        @artists = (@station.artists) ? @station.artists  : {}
        render '/api/stations/show'
    end

    def create
        @station = Station.new(station_params)
        @station.user_id = current_user.id
        if @station.save
            render '/api/stations/show' 
        else 
            render json: @station.errors.full_messages, status: 422
        end
    end
    def station_params
        params.require(:station).permit(:title)
    end
end
