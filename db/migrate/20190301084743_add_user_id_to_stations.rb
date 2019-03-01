class AddUserIdToStations < ActiveRecord::Migration[5.2]
  def change
    add_column :stations, :user_id, :integer
  end
end
