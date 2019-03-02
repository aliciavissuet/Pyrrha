class Api::SearchesController < ApplicationController
    def index
        searchTerm = params[:searchTerm]    
        @artists = Artist.where('lower(name) like ?', "%#{searchTerm.downcase}%").limit(4)
        @tracks = Track.where('lower(title) like ?', "#{searchTerm.downcase}%").limit(4)
        @albums = Album.where('lower(title) like ?', "#{searchTerm.downcase}%").limit(4)
        

    end
end
