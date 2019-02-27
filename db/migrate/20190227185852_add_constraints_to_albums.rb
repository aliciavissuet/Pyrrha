class AddConstraintsToAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :title
    remove_column :albums, :artist_id
    remove_column :albums, :year
    add_column :albums, :title, :string, null: false
    add_column :albums, :artist_id, :integer, null: false
    add_column :albums, :year, :integer, null: false
  end
end
