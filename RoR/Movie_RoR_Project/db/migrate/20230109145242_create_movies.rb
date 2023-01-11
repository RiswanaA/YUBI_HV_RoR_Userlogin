class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :moviename
      t.string :director
      t.string :description
      t.string :language

      t.timestamps
    end
  end
end
