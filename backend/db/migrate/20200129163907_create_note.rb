class CreateNote < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.integer :pet_id
      t.integer :employee_id
      t.date :date
      t.text :note_body
      t.boolean :visible_to_user, default: false
      t.timestamps
    end
  end
end
