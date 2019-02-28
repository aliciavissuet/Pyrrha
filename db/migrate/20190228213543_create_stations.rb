class CreateStations < ActiveRecord::Migration[5.2]
  def change
    create_table :stations do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :stations, :user_id
  end
end
