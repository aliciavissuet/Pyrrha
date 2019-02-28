class Artist < ApplicationRecord
    validates :name, presence: true;
    has_many :tracks
    has_many :albums
    has_many :station_created_froms, :as => :mediable
end
