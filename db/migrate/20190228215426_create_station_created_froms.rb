class CreateStationCreatedFroms < ActiveRecord::Migration[5.2]
  def change
    create_table :station_created_froms do |t|
      t.integer :station_id, null: false
      t.references :mediable, polymorphic: true, index: true, null: false 
      t.timestamps
    end
    add_index :station_created_froms, :station_id
  end
end
