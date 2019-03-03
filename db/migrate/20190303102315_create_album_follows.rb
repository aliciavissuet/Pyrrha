class CreateAlbumFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :album_follows do |t|
      t.integer :user_id
      t.integer :album_id
      t.timestamps
    end
    add_index :album_follows, [:user_id, :album_id], unique: true
  end
end
