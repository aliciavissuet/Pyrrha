class Api::AlbumsController < ApplicationController
    def show 
        @album = Album.find(params[:id])
        @tracks = @album.tracks
        @artists = [];
        @tracks.each {|track| @artists.push(track.artist)}
        render '/api/albums/show'
    end
end
