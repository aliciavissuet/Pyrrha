class Track < ApplicationRecord
    validates :title, :artist_id, presence: true
    belongs_to :artist
    belongs_to :album
    has_many :station_created_froms, :as => :mediable
    has_many :track_follows
    has_many :users, through: :track_follows
    has_one_attached :song
    has_one_attached :photo
    has_many :play_histories, :as => :playable
    attr_accessor :last_played
    
    def last_played=(date)
        @last_played = date
    end
end
