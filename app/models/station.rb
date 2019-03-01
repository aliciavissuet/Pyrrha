class Station < ApplicationRecord
    validates :title, :user_id, presence: true
    has_many :station_created_froms
    has_many :followers,
        foreign_key: :user_id, 
        class_name: :User
    # has_many :medias, through: :mediable
    belongs_to :user
    has_many :tracks, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Track
    has_many :albums, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Album
    has_many :artists, 
        through: :station_created_froms,
        source: :mediable,
        source_type: :Artist

end
