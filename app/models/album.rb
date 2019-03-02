class Album < ApplicationRecord
    validates :title, :year, presence: true
    has_many :tracks
    has_many :artists, through: :tracks
    has_many :station_created_froms, :as => :mediable
end
