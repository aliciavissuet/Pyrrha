class RemoveUserIdFromStations < ActiveRecord::Migration[5.2]
  def change
      remove_column :stations, :user_id
  end
end
