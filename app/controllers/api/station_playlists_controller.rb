class Api::StationPlaylistsController < ApplicationController
    def show 
        @station = Station.find(params[:id])
        @tracks1 = (@station.tracks) ? @station.tracks  : {}
        @albums1 = (@station.albums) ? @station.albums  : {}
        @artists1 = (@station.artists) ? @station.artists  : {}

        @tracks = []
        @artists = []
        @albums = []

        @tracks.concat(@tracks1)
        @albums.concat(@albums1)
        @artists.concat(@artists1)
        
        @albums1.each do |album|
            @tracks.concat(album.tracks)
            @artists.concat(album.artists)
        end
        @tracks1.each do |track|
            @tracks.concat(track.artist.tracks)
            @artists.push(track.artist)
            @albums.push(track.album)
        end
        @artists1.each do |artist|
            @tracks.concat(artist.tracks)
        end

        @trackIds = @tracks.map {|tr| tr.id}
        @trackIds = @trackIds.uniq
        render 'api/station_playlists/show'

    end
end
