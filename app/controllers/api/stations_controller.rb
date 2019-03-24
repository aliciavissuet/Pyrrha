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
            .where(mediable_id: mediable_id, mediable_type: params[:station][:mediable_type])
            .select {|scf| scf.station && scf.station.first_media == mediable_id && scf.station.user_id == current_user.id}
        
        if possible_station.length==0
            if params[:station][:mediable_type] == 'Track'
                @station.tracks.push(Track.find(mediable_id))
                @station.save
            elsif params[:station][:mediable_type] == 'Album'
                @station.albums.push(Album.find(mediable_id))
                @station.save
            elsif params[:station][:mediable_type] == 'Artist' 
                @station.artists.push(Artist.find(mediable_id))
                @station.save
            end
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
        func = params[:station][:func]
        mediable_id = params[:station][:mediable_id]
        station = Station.find(params[:id])
        if func == 'Delete' 
            if params[:station][:mediable_type] == 'Track'
                @track = Track.find(mediable_id)
                station.tracks.delete(@track)
            elsif params[:station][:mediable_type] == 'Album'
                @album = Album.find(mediable_id)
                station.albums.delete(@album)
            elsif params[:station][:mediable_type] == 'Artist' 
                @artist = Artist.find(mediable_id)
                station.artists.delete(@artist)
            end
            # scf = StationCreatedFrom.where(mediable_id: params[:station][:mediable_id], mediable_type: params[:station][:mediable_type], station_id: station.id)
            # scf[0].delete 
            
        elsif func == 'Add'
            if params[:station][:mediable_type] == 'Track'
                station.tracks.push(Track.find(mediable_id))
                station.save
            elsif params[:station][:mediable_type] == 'Album'
                station.albums.push(Album.find(mediable_id))
                station.save
            elsif params[:station][:mediable_type] == 'Artist' 
                station.artists.push(Artist.find(mediable_id))
                station.save
            end
        end
        @station = Station.find(params[:id])
        # @station_created_from = StationCreatedFrom.new(station_created_from_params)
        # @station_created_from.save
        @tracks = (@station.tracks) ? @station.tracks  : {}
        @albums = (@station.albums) ? @station.albums  : {}
        @artists = (@station.artists) ? @station.artists  : {}
        render '/api/stations/created'
    end

    #unfollow station
    def destroy
        
        @station = Station.find(params[:id])
        RecentPlay.where(user_id: current_user.id, mediable_type: 'station', media_id: params[:id]).destroy_all
        @station.delete
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
