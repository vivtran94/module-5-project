class CreateAppointment < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :pet_id
      t.integer :employee_id
      t.string :date
      t.string :start_time
      t.boolean :user_confirmed, default: false
      t.boolean :employee_confirmed, default: false
      t.timestamps
    end
  end
end
