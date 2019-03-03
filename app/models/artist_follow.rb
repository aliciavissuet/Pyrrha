class ArtistFollow < ApplicationRecord
    validates :user_id, :artist_id, presence: true
    validates :user_id, uniqueness: { scope: :artist_id }
    belongs_to :user
    belongs_to :artist
end
