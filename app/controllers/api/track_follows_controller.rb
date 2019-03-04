class Api::TrackFollowsController < ApplicationController
    def destroy 
        
        @trackFollow = TrackFollow.where(user_id: params[:tf][:userId], track_id: params[:tf][:trackId])[0]
        @trackFollow.delete
        @tracks = Track.joins(:users).includes(:album, :artist).where(users: {id: params[:tf][:userId]})
        @artists = []
        @albums = []
        @tracks.each do |track|
            @artists.push(track.artist)
            @albums.push(track.album)
        end
        render '/api/tracks/index'
         
    end
end
