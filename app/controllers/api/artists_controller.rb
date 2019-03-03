class Api::ArtistsController < ApplicationController
    def show 
        @artist = Artist.find(params[:id])
        @albums = @artist.albums
        render '/api/artists/show'
    end
    def index 
        # debugger
        # userId = params[:userId].to_i
        @artists = Artist.joins(:users).includes(:tracks, :albums).where(users: {id: params[:userId]})
        @tracks = []
        @albums = []
        @artists.each do |artist|
            @tracks.concat(artist.tracks)
            @albums.concat(artist.albums)
        end
        
        render '/api/artists/index'
    end
end
