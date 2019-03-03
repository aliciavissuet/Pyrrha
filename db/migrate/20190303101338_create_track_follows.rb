class CreateTrackFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :track_follows do |t|
      t.integer :user_id
      t.integer :track_id
      t.timestamps
    end
    add_index :track_follows, [:user_id, :track_id], unique: true
  end
end
