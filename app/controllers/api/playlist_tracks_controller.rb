class Api::PlaylistTracksController < ApplicationController
    def create 
        @playlistTrack = PlaylistTrack.new(playlist_id: params[:pt][:playlistId], track_id: params[:pt][:trackId])
        @playlistTrack.save
        @playlist = Playlist.find(params[:pt][:playlistId])
        render '/api/playlists/show'
    end

    def destroy 
        @playlistTrack = PlaylistTrack.find_by(playlist_id: params[:pt][:playlistId], track_id: params[:pt][:trackId])
        @playlistTrack.delete 
        @playlist = Playlist.find(params[:pt][:playlistId])
        render '/api/playlists/show'
    end

    
end
