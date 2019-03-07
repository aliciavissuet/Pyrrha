class CreateRecentPlays < ActiveRecord::Migration[5.2]
  def change
    create_table :recent_plays do |t|
      t.integer :user_id
      t.integer :media_id
      t.string :media_type
      t.timestamps
    end
    add_index :recent_plays, :user_id
  end
end
