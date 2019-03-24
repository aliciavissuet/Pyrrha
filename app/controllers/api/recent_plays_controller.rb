class Api::RecentPlaysController < ApplicationController
    def create 
        
        @recent_play = RecentPlay.find_by(user_id: current_user.id, media_type: params[:recent][:media_type], media_id: params[:recent][:media_id])
        if @recent_play
            # @recent_play.update_attributes(recent_play_params)
            @recent_play.touch
        else
            @recent_play = RecentPlay.new(recent_play_params)
            @recent_play.user_id = current_user.id
            @recent_play.save
        end
        
        @recent_plays = RecentPlay.where(user_id: current_user.id).order(updated_at: :desc).limit(8)
        @tracks = []
        @albums = []
        @stations = []
        @playlists = []
        @recent_plays.each do |rp| 
            if rp.media_type == 'album'
                album = Album.find(rp.media_id)
                album.last_played = rp.updated_at 
                @albums.push(album)
            elsif rp.media_type == 'track'
                track = Track.find(rp.media_id)
                track.last_played = rp.updated_at 
                @tracks.push(track)
            elsif rp.media_type == 'station'
                station = Station.find(rp.media_id)
                station.last_played = rp.updated_at
                first_media = station.station_created_froms.first
                if first_media.mediable_type == 'Artist'
                    media = Artist.find(first_media.mediable_id)
                end 
                if first_media.mediable_type == 'Album'
                    media = Album.find(first_media.mediable_id)
                end 
                if first_media.mediable_type == 'Track'
                    media = Track.find(first_media.mediable_id)
                end 
                station.photo = media.photo
                @stations.push(station)
            elsif rp.media_type == 'playlist'
                playlist = Playlist.find(rp.media_id)
                playlist.photo= playlist.tracks.first.photo
                playlist.last_played = rp.updated_at 
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
        # @recent_plays = RecentPlay.where(user_id: userId).order(created_at: :desc).limit(10)
        @recent_plays= current_user.recent_plays.order(updated_at: :desc).limit(10)
        @tracks = []
        @albums = []
        @stations = []
        @playlists = []
        @recent_plays.each do |rp| 
            if rp.media_type == 'album'
                album = Album.find(rp.media_id.to_i)
                album.last_played = rp.updated_at 
                @albums.push(album) if (album)
            elsif rp.media_type == 'track'
                track = Track.find(rp.media_id)
                track.last_played = rp.updated_at 
                @tracks.push(track) if (track)
            elsif rp.media_type == 'station'
                station = Station.find(rp.media_id)
                station.last_played = rp.updated_at
                first_media = station.station_created_froms.first
                if first_media.mediable_type == 'Artist'
                    media = Artist.find(first_media.mediable_id)
                end 
                if first_media.mediable_type == 'Album'
                    media = Album.find(first_media.mediable_id)
                end 
                if first_media.mediable_type == 'Track'
                    media = Track.find(first_media.mediable_id)
                end 
                station.photo = media.photo 
                @stations.push(station) if (station)
            elsif rp.media_type == 'playlist'
                playlist = Playlist.find(rp.media_id.to_i)
                playlist.last_played = rp.updated_at
                playlist.photo= playlist.tracks.first.photo 
                @playlists.push(playlist) if(playlist)
            end
        end
        @albums = @albums.uniq
        @tracks = @tracks.uniq
        @playlists = @playlists.uniq
        @stations = @stations.uniq
        
        render '/api/recent_plays/index'
    end
    def recent_play_params 
        params.require(:recent).permit(:media_type, :media_id)
    end
end
