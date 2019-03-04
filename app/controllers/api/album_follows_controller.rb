class Api::AlbumFollowsController < ApplicationController
    def destroy 
        
        @albumFollow = AlbumFollow.where(user_id: params[:af][:userId], album_id: params[:af][:albumId])[0]
        @albumFollow.delete
         @albums = Album.joins(:users).includes(:tracks, :artists).where(users: {id: params[:af][:userId]})
        @albums = Album.joins(:users).includes(:tracks, :artists).where(users: {id: params[:userId]})
        @tracks = []
        @artists = []
        @albums.each do |album|
            @tracks.concat(album.tracks)
            @artists.concat(album.artists)
        end
         render '/api/albums/index'
         
    end
end
