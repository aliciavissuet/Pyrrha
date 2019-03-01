class CreateStationFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :station_follows do |t|
      t.integer :user_id, null: false
      t.integer :station_id, null: false
      t.timestamps
    end
    add_index :station_follows, [:user_id, :station_id], unique: true
  end
end
