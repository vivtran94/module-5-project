class CreateEmployee < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :username
      t.string :password_digest
      t.string :street_address
      t.string :street_state
      t.integer :street_zipcode
      t.string :first_name
      t.string :last_name
      t.string :role
      t.integer :phone_number
      t.string :phone_number_type
      t.string :email
    end
  end
end
