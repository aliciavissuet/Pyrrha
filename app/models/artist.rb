class Artist < ApplicationRecord
    validates :name, presence: true;
    has_many :tracks
    has_many :albums, through: :tracks
    has_many :station_created_froms, :as => :mediable
    
end
