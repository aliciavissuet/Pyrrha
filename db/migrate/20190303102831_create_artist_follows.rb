class CreateArtistFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_follows do |t|
      t.integer :user_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :artist_follows, [:user_id, :artist_id], unique: true
  end
end
