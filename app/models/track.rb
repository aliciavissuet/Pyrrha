class Track < ApplicationRecord
    validates :title, :artist_id, presence: true
    belongs_to :artist
    belongs_to :album
    has_many :station_created_froms, :as => :mediable
end
