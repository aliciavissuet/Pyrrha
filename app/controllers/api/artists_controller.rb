class Api::ArtistsController < ApplicationController
    def show 
        @artist = Artist.find(params[:id])
        render '/api/artists/show'
    end
end
