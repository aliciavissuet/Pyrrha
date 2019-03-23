class CreatePlayHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :play_histories do |t|
      t.integer :user_id, null: false
      t.references :playable, polymorphic: true, index: true, null: false
      t.timestamps
    end
  end
end
