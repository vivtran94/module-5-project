class CreatePetOwner < ActiveRecord::Migration[6.0]
  def change
    create_table :pet_owners do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :street_address
      t.string :street_state
      t.integer :street_zipcode
      t.integer :phone_number
      t.string :phone_number_type
      t.string :email
      t.integer :driver_license
      t.string :username
      t.string :password

      t.string :pending_first_name, default: nil
      t.string :pending_last_name, default: nil
      t.date :pending_date_of_birth, default: nil
      t.string :pending_address, default: nil
      t.integer :pending_phone_number, default: nil
      t.string :pending_email, default: nil
    end
  end
end