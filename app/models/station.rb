class Station < ApplicationRecord
    validates :title, :user_id, presence: true
    has_many :station_created_froms
    has_many :followers,
        foreign_key: :user_id, 
        class_name: :User
    # has_many :medias, through: :mediable
    belongs_to :user
    has_many :tracks, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Track
    has_many :albums, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Album
    has_many :artists, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Artist
    has_many :play_histories, :as => :playable
    attr_accessor :photo, :last_played
    def photo=(photo)
        @photo = photo
    end
    def last_played=(date)
        @last_played = date
    end
    def first_media
        creates = StationCreatedFrom.where(station_id: self.id)
        
        return creates.sort_by {|scf| scf.created_at}[0].mediable_id
    end

    # def getAllInfo 
        
    # end

end
