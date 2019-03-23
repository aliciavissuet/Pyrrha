class Playlist < ApplicationRecord
    validates :title, :user_id, presence: true
    belongs_to :user
    has_many :playlist_tracks
    has_many :tracks, through: :playlist_tracks
    has_many :albums, through: :tracks 
    has_many :artists, through: :tracks
    has_many :play_histories, :as => :playable
    attr_accessor :photo, :last_played
    def photo=(photo)
        @photo = photo
    end
    def last_played=(date)
        @last_played = date
    end
end
