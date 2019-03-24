class Album < ApplicationRecord
    validates :title, :year, presence: true
    has_many :tracks
    has_many :artists, through: :tracks
    has_many :station_created_froms, :as => :mediable
    has_many :album_follows
    has_many :users, through: :album_follows
    has_one_attached :photo
    has_many :play_histories, :as => :playable
    attr_accessor :last_played
    
    def last_played=(date)
        @last_played = date
    end
end
