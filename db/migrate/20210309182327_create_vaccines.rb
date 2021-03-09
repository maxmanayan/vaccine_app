class CreateVaccines < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccines do |t|
      t.string :name
      t.float :effectiveness
      t.string :maker
      t.belongs_to :bug, null: false, foreign_key: true

      t.timestamps
    end
  end
end
