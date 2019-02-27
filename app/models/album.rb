class Album < ApplicationRecord
    validates :title, :year, presence: true
    has_many :tracks
end
