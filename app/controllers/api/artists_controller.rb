class Api::ArtistsController < ApplicationController
    def show 
        @artist = Artist.find(params[:id])
        @albums = @artist.albums
        render '/api/artists/show'
    end
end
