class StationCreatedFrom < ApplicationRecord
    belongs_to :mediable, :polymorphic => true
    belongs_to :station

    
end
