class Api::TracksController < ApplicationController
    def show 
        @track = Track.find(params[:id])
        @artist = Artist.find(@track.artist_id)
        @album = @track.album
        render 'api/tracks/show'
    end
    def index 
        
        @tracks = Track.joins(:users).includes(:album, :artist).where(users: {id: params[:userId]})
        @artists = []
        @albums = []
        @tracks.each do |track|
            @artists.push(track.artist)
            @albums.push(track.album)
        end
        
        render '/api/tracks/index'
    end
end
