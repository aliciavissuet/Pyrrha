class Album < ApplicationRecord
    validates :title, :year, presence: true
    has_many :tracks
    has_many :artists
end
