class Api::TracksController < ApplicationController
    def show 
        @track = Track.find(params[:id])
        @artist = Artist.find(@track.artist_id)
        @album = @track.album
        render 'api/tracks/show'
    end
end
