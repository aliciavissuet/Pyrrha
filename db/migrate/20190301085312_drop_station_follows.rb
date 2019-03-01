class DropStationFollows < ActiveRecord::Migration[5.2]
  def change
    drop_table :station_follows
  end
end
