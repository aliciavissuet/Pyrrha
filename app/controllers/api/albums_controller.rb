class Api::AlbumsController < ApplicationController
    def show 
        @album = Album.includes(:tracks, :artists).where(id: params[:id])[0]
        # @tracks = @album.tracks
        # @artists = [];
        # @tracks.each {|track| @artists.push(track.artist)}
        render '/api/albums/show'
    end
end
