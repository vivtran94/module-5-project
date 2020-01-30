class CreatePet < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.integer :user_id
      t.string :name
      t.date :date_of_birth
      t.string :gender
      t.string :breed
      t.string :color

      t.string :pending_name, default: nil
      t.date :pending_date_of_birth, default: nil
      t.string :pending_gender, default: nil
      t.string :pending_breed, default: nil
      t.string :pending_color, default: nil
    end
  end
end
