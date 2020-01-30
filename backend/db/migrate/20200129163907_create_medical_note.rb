class CreateMedicalNote < ActiveRecord::Migration[6.0]
  def change
    create_table :medical_notes do |t|
      t.integer :pet_id
      t.integer :employee_id
      t.date :date
      t.text :note_body
      t.boolean :visible_to_petowner, default: false
      t.timestamps
    end
  end
end
