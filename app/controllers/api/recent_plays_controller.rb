class Api::RecentPlaysController < ApplicationController
    def create 
        
        @recent_play = RecentPlay.new(recent_play_params)
        @recent_play.user_id = current_user.id
        @recent_play.save
        @recent_plays = RecentPlay.where(user_id: current_user.id).order(created_at: :desc).limit(8)
        @tracks = []
        @albums = []
        @stations = []
        @playlists = []
        @recent_plays.each do |rp| 
            if rp.media_type == 'album'
                album = Album.find(rp.media_id) 
                @albums.push(album)
            elsif rp.media_type == 'track'
                track = Track.find(rp.media_id)
                @tracks.push(track)
            elsif rp.media_type == 'station'
                station = Station.find(rp.media_id)
                @stations.push(station)
            elsif rp.media_type == 'playlist'
                playlist = Playlist.find(rp.media_id)
                @playlists.push(playlist)
            end
        end
        @albums = @albums.uniq
        @tracks = @tracks.uniq
        @playlists = @playlists.uniq
        @stations = @stations.uniq
        render '/api/recent_plays/index'
    end

    def index
        userId = current_user.id
        # mediaId = params[:recent][:mediaId]
        @recent_plays = RecentPlay.where(user_id: userId).order(created_at: :desc).limit(8)
        @tracks = []
        @albums = []
        @stations = []
        @playlists = []
        @recent_plays.each do |rp| 
            if rp.media_type == 'album'
                album = Album.find(rp.media_id)
                @albums.push(album)
            elsif rp.media_type == 'track'
                track = Track.find(rp.media_id)
                @tracks.push(track)
            elsif rp.media_type == 'station'
                station = Station.find(rp.media_id)
                @stations.push(station)
            elsif rp.media_type == 'playlist'
                playlist = Playlist.find(rp.media_id)
                @playlists.push(playlist)
            end
        end
        render '/api/recent_plays/index'
    end
    def recent_play_params 
        params.require(:recent).permit(:media_type, :media_id)
    end
end
