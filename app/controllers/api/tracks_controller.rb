class Api::TracksController < ApplicationController
    def show 
        @track = Track.find(params[:id])
        @artist = Artist.find(@track.artist_id)
        render 'api/tracks/show'
    end
end
