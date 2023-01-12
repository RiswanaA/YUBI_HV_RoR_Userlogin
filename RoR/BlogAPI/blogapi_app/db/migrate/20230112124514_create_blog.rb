class CreateBlog < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :content
      t.string :imagelink   
      t.timestamps
    end
  end
end
