class StationFollow < ApplicationRecord
    validates :user, uniqueness: { scope: :station }
    validates :user_id, :station_id, presence: true
    belongs_to :station 
    belongs_to :user
end
