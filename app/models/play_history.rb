class PlayHistory < ApplicationRecord
    belongs_to :playable, :polymorphic => true
    belongs_to :user
end
