class CreatePrescription < ActiveRecord::Migration[6.0]
  def change
    create_table :prescriptions do |t|
      t.integer :pet_id
      t.integer :medication_id
      t.string :direction
      t.integer :quantity
      t.integer :refill
      t.timestamps
    end
  end
end
