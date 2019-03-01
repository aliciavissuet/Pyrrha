class AddIndexToStations < ActiveRecord::Migration[5.2]
  def change
    add_index :stations, :user_id
  end
end
