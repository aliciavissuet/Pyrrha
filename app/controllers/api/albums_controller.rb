class Api::AlbumsController < ApplicationController
    def show 
        @album = Album.find(params[:id])
        @tracks = @album.tracks
        render '/api/albums/show'
    end
end
