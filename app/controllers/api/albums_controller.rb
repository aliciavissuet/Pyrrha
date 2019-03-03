class Api::AlbumsController < ApplicationController
    def show 
        @album = Album.includes(:tracks, :artists).where(id: params[:id])[0]
        # @tracks = @album.tracks
        # @artists = [];
        # @tracks.each {|track| @artists.push(track.artist)}
        render '/api/albums/show'
    end
    def index 
        # debugger
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
