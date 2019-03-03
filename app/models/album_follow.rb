class AlbumFollow < ApplicationRecord
    validates :user_id, :album_id, presence: true
    validates :user_id, uniqueness: { scope: :album_id }
    belongs_to :user
    belongs_to :album
end
