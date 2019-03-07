class RecentPlay < ApplicationRecord
    validates :user_id, :media_id, :media_type, presence: true
    
end
