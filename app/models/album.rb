class Album < ApplicationRecord
    validates :title, :year, presence: true
    has_many :tracks
    has_many :artists, through: :tracks
    has_many :station_created_froms, :as => :mediable
    has_many :album_follows
    has_many :users, through: :album_follows
    has_one_attached :photo
end
