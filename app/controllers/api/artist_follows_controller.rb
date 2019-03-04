class Api::ArtistFollowsController < ApplicationController
    def destroy 
        
        @artistFollow = ArtistFollow.where(user_id: params[:af][:userId], artist_id: params[:af][:artistId])[0]
        @artistFollow.delete
         @artists = Artist.joins(:users).includes(:albums, :tracks).where(users: {id: params[:af][:userId]})
        @tracks = []
        @albums = []
        @artists.each do |artist|
            @tracks.concat(artist.tracks)
            @albums.concat(artist.albums)
        end
         render '/api/artists/index'
         
    end
end
