class Api::PlaylistsController < ApplicationController
    def create 
        @playlist = Playlist.new 
        @playlist.user_id = current_user.id 
        @playlist.title = params[:playlist][:title]
        
        @playlist.save
        @track = Track.find(params[:playlist][:trackId])
        @playlist.tracks.push(@track)
        render '/api/playlists/show'
    end

    def show 
        @playlist = Playlist.find(params[:id])
        render '/api/playlists/show'
    end

    def index 
        @playlists = Playlist.includes(:tracks, :albums, :artists).where(user_id: current_user.id)
        @tracks = []
        @artists = []
        @albums = []
        @playlists.each do |playlist|
            @tracks.concat(playlist.tracks)
            @artists.concat(playlist.artists)
            @albums.concat(playlist.albums)
        end
        
        @albums = @albums.uniq
        @artists = @artists.uniq
        @tracks = @tracks.uniq
        render '/api/playlists/index'
    end

    def destroy 
        @playlist = Playlist.find(params[:id]);
        RecentPlay.where(user_id: current_user.id, media_type: 'playlist', media_id: params[:id]).destroy_all

        @playlist.delete
        @playlists = Playlist.includes(:tracks, :albums, :artists).where(user_id: current_user.id)
        @tracks = []
        @artists = []
        @albums = []
        @playlists.each do |playlist|
            @tracks.concat(playlist.tracks)
            @artists.concat(playlist.artists)
            @albums.concat(playlist.albums)
        end
        @albums = @albums.uniq
        @artists = @artists.uniq
        @tracks = @tracks.uniq
        render '/api/playlists/index'
    end
    def update 
        @playlist = Playlist.find(params[:id])
        @playlist.title = params[:playlist][:title]
        @playlist.save 
        render '/api/playlists/show'
    end
end
